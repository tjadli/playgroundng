import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as PhotosEffectsTypes from './../_store/_effects/photos/photos.effects.types';
import { MainState } from '../_store/_states/main.state';
import { Store } from '@ngrx/store';
import { Photo } from '../_store/_entities/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: Array<Photo>;
  constructor(
    private store: Store<MainState>,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.store.dispatch(new PhotosEffectsTypes.GetPhotos({
        username: params.username
      }));
    });
  }

  ngOnInit() {
    this.store.select('photos').subscribe(photos => {
      this.photos = photos;
    });
  }

}
