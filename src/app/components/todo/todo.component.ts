import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  public task:any = {
    title : '',
    category : '',
    degree : ''
  };

  public tasks:any[] = [];

  addNewTask () {
    let temp:any = {};
    temp.title = this.task.title;
    temp.category = this.task.category;
    temp.degree = this.task.degree;

    this.tasks.push(temp);

    this.task.title = '';
    this.task.category = '';
    this.task.degree = '';
  }
}
