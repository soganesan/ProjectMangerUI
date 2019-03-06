import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';

import { RouterTestingModule } from '@angular/router/testing';
import { TaskServiceService } from '../../Services/Task/task-service.service'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      imports:[RouterTestingModule,FormsModule,ReactiveFormsModule],
      providers: [TaskServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
