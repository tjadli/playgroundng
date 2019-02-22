import * as PhotosActions from '../../_actions/photos.actions';
import {initialState} from '../../_states/main.state';
import createReducer from '../../createReducer';
import { Photo } from '../../_entities/Photo';

export type Action = PhotosActions.All;

export function photosReducer(incomingState: Array<Photo> = initialState.photos, incomingAction: Action): Array<Photo> {
  return createReducer({
    [PhotosActions.ActionTypes.GET_PHOTOS]: (state: Array<Photo>, action: PhotosActions.GetPhotos) => {
      return action.payload.photos;
    },
  })(incomingState, incomingAction);
}

