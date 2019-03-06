import { TaskServiceService } from './task-service.service';
import { TestBed,inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import {HttpClient} from '@angular/common/http'
import {MockBackend} from '@angular/http/testing'

import { Task } from '../../models/task';
import { HttpModule,Response } from '@angular/http';

describe('TaskServiceService', () => {

  let service: TaskServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpModule],
      providers: [TaskServiceService,{provide:HttpClient,deps:MockBackend}]
    });
    service = TestBed.get(TaskServiceService);
    httpMock = TestBed.get(HttpTestingController);
    });

  it('should be created', () => {
    const service: TaskServiceService = TestBed.get(TaskServiceService);
    expect(service).toBeTruthy();
  });

  it('Service should check with Dummy post from api via get method', ()=>{
    var date = new Date('2018-11-02');
    const dummyPost: Task[] = [
        {
          ProjectId:1,
          ProjectName:'TEST',
          TaskName:'Task New',
          Priority:10,
          IsParent:true,
          ParentTask:'Task',
          StartDate:date,
          EndDate:date,
          UserId:1,
          UserName:'User1',
          Deleted:false,
          Status:'Completed'
        }
    ];

service.GetTask(2002).subscribe(post => {
  expect(post.TaskName).toBe(dummyPost.find(i=>i.TaskName == 'Task New').TaskName);

  });
  });

});
