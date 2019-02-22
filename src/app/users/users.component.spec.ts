import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { By } from '@angular/platform-browser';


describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of users', () => {
    component.users = [{ id: 1, name: 'test' }, { id: 2, name: 'test2' }];
    fixture.detectChanges();
    const tags = fixture.debugElement.queryAllNodes(By.css('div.user_container'));
    expect(component.users.length).toBe(tags.length);
  });
});
