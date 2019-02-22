import { Component, OnDestroy } from '@angular/core';
import { MainState } from '../_store/_states/main.state';
import { Store } from '@ngrx/store';
import {  Subscription } from 'rxjs';
import { User } from '../_store/_entities/User';
import * as UsersEffectsTypes from '../_store/_effects/users/users.effects.types';
import { debounce } from 'lodash';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy {
  users: Array<User> = [];
  searchModel = '';
  private subscription: Subscription;
  constructor(private store: Store<MainState>) {
    this.subscription = store.select('users').subscribe((users) => {
      this.users = users;
    });
   }
   search() {
    this.store.dispatch(new UsersEffectsTypes.GetUsersEffect({
      search: this.searchModel
    }));
   }
   ngOnDestroy() {
     this.subscription.unsubscribe();
   }
}
