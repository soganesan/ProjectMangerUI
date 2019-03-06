import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskComponent } from './view-task.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskServiceService } from '../../Services/Task/task-service.service'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaskComponent ],
      imports:[RouterTestingModule,FormsModule,ReactiveFormsModule],
      providers: [TaskServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
