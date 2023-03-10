import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public token: string;
  private redirectURL: string;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.token = '';
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
