import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required: true}) newTask!: string;
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

}
