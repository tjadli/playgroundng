import {Action} from '@ngrx/store';

export const EffectTypes = {
  GET_USERS_EFFECT: '[UsersEffect] GET_USERS'
};

export class GetUsersEffect implements Action {
  type = EffectTypes.GET_USERS_EFFECT;

  constructor( public payload: {
    search: string
  }) { }
}


export type All = GetUsersEffect;
