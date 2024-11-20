import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskItemComponentComponent } from './task-item-component/task-item-component.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { HighlightUrgentDirective } from './highlight-urgent.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponentComponent,
    TaskListComponentComponent,
    HighlightUrgentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
