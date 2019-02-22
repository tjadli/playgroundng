import * as UsersActions from '../../_actions/users.actions';
import {initialState} from '../../_states/main.state';
import createReducer from '../../createReducer';
import { User } from '../../_entities/User';

export type Action = UsersActions.All;

export function userReducer(incomingState: Array<User> = initialState.users, incomingAction: Action): Array<User> {
  return createReducer({
    [UsersActions.ActionTypes.GET_USERS]: (state: User, action: UsersActions.GetUsers) => {
      return action.payload.users;
    }
  })(incomingState, incomingAction);
}

