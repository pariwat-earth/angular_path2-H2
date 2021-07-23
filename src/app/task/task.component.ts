import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskObj: Task;
  @Output() deleteTask: EventEmitter<TaskComponent> = new EventEmitter();
  @Output() taskClick: EventEmitter<TaskComponent> = new EventEmitter();
  isSelected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  delete(){
    this.deleteTask.emit(this);
  }

  // tslint:disable-next-line:typedef
  taskSelect(){
    this.taskClick.emit(this);
  }
}
