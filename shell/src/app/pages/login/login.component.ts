import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public token: string;
  public defaultToken: string;
  private redirectURL: string;
  constructor(private router: Router, private route: ActivatedRoute) {
    // 2023-03-10T10:21:28.989Z##2023-03-20T00:00:00.000Z!!admin,user
    this.token = '';
    const date = new Date().getTime();
    const time1 = date - 10000000;
    const time2 = date + 10000000;
    this.defaultToken = `${new Date(time1)}##${new Date(time2)}!!admin,user`;
  }
  backToPreviousPage() {
    if (this.redirectURL) {
      this.router
        .navigateByUrl(this.redirectURL)
        .catch(() => this.router.navigateByUrl('/home'));
    } else {
      this.router.navigateByUrl('/home');
    }
  }
  onSubmit() {
    localStorage.setItem('token', this.token);
    this.backToPreviousPage();
  }
  ngOnInit(): void {
    let params = this.route.snapshot.queryParams;
    if (params['redirectURL']) {
      this.redirectURL = params['redirectURL'];
    }
  }
}
