import { Component, Input, Output,EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { Task } from '../interface/Task.interface';
@Component({
  selector: 'app-task-item-component',
  templateUrl: './task-item-component.component.html',
  styleUrl: './task-item-component.component.css',
})
export class TaskItemComponentComponent {
  @Input() task!: Task;
  @Output() markAsCompleted = new EventEmitter<number>();

  markTaskAsCompleted() {
    if (this.task.status === 'pending') {
      this.markAsCompleted.emit(this.task.id);
    }
  }
}