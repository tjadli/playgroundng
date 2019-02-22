import {Action} from '@ngrx/store';
import { Photo } from '../_entities/Photo';

export const ActionTypes = {
  GET_PHOTOS: '[Photos] GET_PHOTOS'
};

export const ErrorActionTypes = {
  GET_PHOTOS_ERROR: '[Photos] GET_PHOTOS_ERROR'
};

export class GetPhotos implements Action {
  type = ActionTypes.GET_PHOTOS;

  constructor(public payload: {
    photos: Array<Photo>
  }) { }
}

export class GetPhotosError implements Action {
  type = ErrorActionTypes.GET_PHOTOS_ERROR;

  constructor(public errors: any) { }
}

export type All = GetPhotos;

export type AllErrors = GetPhotosError;
