import { userReducer } from './users.reducer';
import * as UsersActions from '../../_actions/users.actions';
import { User } from '../../_entities/User';

export type Action = UsersActions.All;


describe('Reducer: USERS', () => {
  let users: Array<User>;

  beforeEach(() => {
    users = [{
      id: 1,
      first_name: 'first name',
      last_name: 'first name'
    }];
  });

  it('should correctly call reducer with GET_USERS action and return the correct value', () => {
    const action: Action = new UsersActions.GetUsers({
      users
    });

    expect(userReducer(null, action)).toEqual(users);
  });

});
