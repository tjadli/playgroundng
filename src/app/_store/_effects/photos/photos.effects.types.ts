import {Action} from '@ngrx/store';
import {GetPhotosRequestPayload} from './photos.effects.payloads';
export const EffectTypes = {
  GET_PHOTOS_EFFECT: '[photosEffect] GET_PHOTOS'
};

export class GetPhotos implements Action {
  type = EffectTypes.GET_PHOTOS_EFFECT;

  constructor( public payload: {
    username: string
  }) { }
}


export type All = GetPhotos;
