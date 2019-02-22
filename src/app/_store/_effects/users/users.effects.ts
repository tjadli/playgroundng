import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { switchMap, catchError, map } from 'rxjs/operators';
import * as UsersActions from '../../_actions/users.actions';
import * as UsersEffectsTypes from './users.effects.types';
import {AppEffect} from '../app.effect';
import { Observable, of } from 'rxjs';

export type Action = UsersEffectsTypes.All;


@Injectable()
export class UsersEffects extends AppEffect {

  constructor(private action$: Actions<Action>, private http: HttpClient) { super(http); }

  @Effect() getUsers$: Observable<UsersActions.GetUsers> = this.action$.pipe(
    ofType<UsersEffectsTypes.GetUsersEffect>(UsersEffectsTypes.EffectTypes.GET_USERS_EFFECT),
    switchMap((action) => {
      return this.get$(`${this.baseUrl}search/users?query=${action.payload.search}`).pipe(
        map((data: any) => {
          return new UsersActions.GetUsers({
            users: data.results
          });
        }),
        catchError((err) =>  of(new UsersActions.GetUsers({users: []})))
      );
    })
  );

}
