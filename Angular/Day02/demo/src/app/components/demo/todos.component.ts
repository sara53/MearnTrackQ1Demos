import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todosList: string[] = [];
  taskName: string = '';
  addToTodos() {
    this.todosList.push(this.taskName);
    this.taskName = '';
  }

  removeTodo(i: number) {
    this.todosList = this.todosList.filter((todo, index) => index != i);
  }
}
