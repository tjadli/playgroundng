import { ActionReducerMap } from '@ngrx/store';
import { MainState } from '../_states/main.state';
import { userReducer } from './users/users.reducer';
import { photosReducer } from './photos/photos.reducer';


export const reducers: ActionReducerMap<MainState> = {
  users: userReducer,
  photos: photosReducer
};
