import { Component, QueryList, ViewChildren } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodolistComponent {
  @ViewChildren(TaskComponent) taskComps: QueryList<TaskComponent>;
  task: Task[] = [];

  taskName: string;
  taskDescription: string;

  taskSelect: Task;

  constructor(){
  }

  addTask() {
    let tempTask: Task = {
      id: this.createUUID(),
      name: this.taskName,
      description: this.taskDescription
    };
    this.task.push(tempTask);
  }

  deletetask(taskComponent: TaskComponent) {
    console.log(taskComponent.taskObj.id);
    this.task = this.task.filter(t => t.id !== taskComponent.taskObj.id);
  }

  createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  selectedTask(taskComponent: TaskComponent) {
    this.clearSelected();
    taskComponent.isSelected = true;
    this.taskSelect = taskComponent.taskObj;
  }

  //เพิ่มแต่ละฟังก์ชั่นเพื่อให้เป็นระเบียบ อ่านง่าย
  clearSelected() {
    this.taskComps.forEach(task => {
      task.isSelected = false;
    });
  }

}
