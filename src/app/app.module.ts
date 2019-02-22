import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './_store/_effects';
import { reducers } from './_store/_reducers';
import { initialState } from './_store/_states/main.state';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgMasonryGridModule } from 'ng-masonry-grid';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UsersComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      initialState
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 30
    }),
    EffectsModule.forRoot(effects),
    HttpClientModule,
    NgMasonryGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
