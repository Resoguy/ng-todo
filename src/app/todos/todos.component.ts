import { Component, OnInit } from '@angular/core';
import { Todo } from '../types/todo.type';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    {id: Math.random(), title: 'Todo 1', done: false},
    {id: Math.random(), title: 'Todo 2', done: true},
    {id: Math.random(), title: 'Todo 3', done: false},
  ];
  todo: string = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    const newTodo = {
      id: Math.random(),
      title: this.todo,
      done: false
    }

    this.todos.push(newTodo);
    this.todo = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(todo => todo.id === id);

    todo.done = !todo.done;
  }

  editTodo(title, id) {
    const todo = this.todos.find(todo => todo.id === id);

    todo.title = title;
  }

}
