import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from '../_store/_reducers';
import { initialState, MainState } from './../_store/_states/main.state';
import { RouterTestingModule } from '@angular/router/testing';


describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let store: Store<MainState>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgMasonryGridModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers, {
          initialState
        })
      ],
      declarations: [ PhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
