import { Component } from '@angular/core';
import { Task } from '../interface/Task.interface';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css',
})
export class TaskListComponentComponent {
  tasks: Task[] = [
    {
      id: 1,
      name: 'Complete homework',
      dueDate: '2024-11-21T08:00:00Z',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Attend meeting',
      dueDate: '2024-11-20T18:00:00Z',
      status: 'pending',
    },
    {
      id: 3,
      name: 'Go for a walk',
      dueDate: '2024-11-23T10:00:00Z',
      status: 'completed',
    },
  ];

  markTaskAsCompleted(taskId: number) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.status = 'completed';
    }
  }
}
