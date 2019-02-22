import { Photo } from '../_entities/Photo';
import { User } from '../_entities/User';


export interface MainState {
  users: Array<User>;
  photos: Array<Photo>;
}

export const initialState: MainState = {
  users: [],
  photos: []
};
