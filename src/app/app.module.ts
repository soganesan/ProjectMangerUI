import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProjectComponent } from './UI/add-project/add-project.component';
import { AddTaskComponent } from './UI/add-task/add-task.component';
import { AddUserComponent } from './UI/add-user/add-user.component';
import { UpdateTaskComponent } from './UI/update-task/update-task.component';
import { ViewTaskComponent } from './UI/view-task/view-task.component';

import { TaskServiceService } from './Services/Task/task-service.service';

const appRoutes : Routes = [
  { path : 'AddProject' , component : AddProjectComponent } ,
  { path : 'AddTask' , component : AddTaskComponent } ,
  { path : 'AddUser' , component : AddUserComponent } ,
  { path : 'UpdateTask/:id' , component :UpdateTaskComponent } ,
  { path : 'ViewTask' , component : ViewTaskComponent }   
];

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    AddTaskComponent,
    AddUserComponent,
    UpdateTaskComponent,
    ViewTaskComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpModule,HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
