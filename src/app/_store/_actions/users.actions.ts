import { Action } from '@ngrx/store';
import { User } from '../_entities/User';


export const ActionTypes = {
  GET_USERS: '[Users] GET_USERS'
};

export class GetUsers implements Action {
  type = ActionTypes.GET_USERS;

  constructor(public payload: {
    users: Array<User>
  }) { }
}

export type All = GetUsers;
