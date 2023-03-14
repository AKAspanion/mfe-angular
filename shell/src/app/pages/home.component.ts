import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectReactAppName } from '../store/react.selectors';
import { selectVueAppName } from '../store/vue.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  reactAppname$: Observable<any>;
  vueAppname$: Observable<any>;

  constructor(private store: Store<{ react: any }>) {
    this.reactAppname$ = store.select(selectReactAppName);
    this.vueAppname$ = store.select(selectVueAppName);
  }

  ngOnInit(): void {}
}
