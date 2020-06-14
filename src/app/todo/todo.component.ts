import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../types/todo.type';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() onDelete = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  editText: string;
  showEdit: boolean = false;

  constructor() {}

  ngOnInit() {
    this.editText = this.todo.title;
  }

  finishEditing() {
    this.onEdit.emit(this.editText);
    this.showEdit = false;
  }

}
