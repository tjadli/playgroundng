import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { reducers } from '../_store/_reducers';
import { StoreModule, Store } from '@ngrx/store';
import { initialState, MainState } from './../_store/_states/main.state';
import * as UsersActions from './../_store/_actions/users.actions';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let store: Store<MainState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          RouterTestingModule,
          FormsModule,
          StoreModule.forRoot(reducers, {
            initialState
          })
      ],
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of users', () => {
    fixture.detectChanges();
    const tags = fixture.debugElement.queryAllNodes(By.css('div.user_container'));
    expect(component.users.length).toBe(0);
  });
});
