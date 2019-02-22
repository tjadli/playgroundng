import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as PhotosActions from '../../_actions/photos.actions';
import * as PhotosEffectsTypes from './photos.effects.types';
import { catchError, switchMap, map } from 'rxjs/operators';
import { AppEffect } from '../app.effect';
import { HttpClient } from '@angular/common/http';

export type Action = PhotosEffectsTypes.All;

@Injectable()
export class PhotosEffects  extends AppEffect {
  constructor(private action$: Actions<Action>, private http: HttpClient) {
    super(http);
  }

  @Effect()
  GetPhotosEffect$: Observable<
    PhotosActions.GetPhotos | PhotosActions.GetPhotosError
  > = this.action$
      .pipe(
        ofType<PhotosEffectsTypes.GetPhotos>(
          PhotosEffectsTypes.EffectTypes.GET_PHOTOS_EFFECT
        ),
        switchMap((action) => {
          return this.get$(`${this.baseUrl}users/${action.payload.username}/photos`).pipe(
            map((data: any) => {
              return new PhotosActions.GetPhotos({
                photos: data
              });
            }),
            catchError((err) => of(new PhotosActions.GetPhotos({ photos: [] })))
          );
        }),
        catchError(err => of(new PhotosActions.GetPhotosError(err)))
      );
}
