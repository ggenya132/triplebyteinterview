import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input()
  name;
  @Input()
  cards;
  @Input()
  columnId;

  @Input()
  color;

  @Output()
  cardAdded = new EventEmitter();

  @Output()
  moveLeft = new EventEmitter();

  @Output()
  moveRight = new EventEmitter();

  onAddCard() {
    const message = window.prompt('');
    this.cardAdded.next({ message, id: this.columnId });
  }
  constructor() {}

  ngOnInit(): void {
    console.log(this.columnId);
  }

  onMoveLeft(id) {
    this.moveLeft.next({ columnId: this.columnId, cardId: id });
  }
  onMoveRight(id) {
    this.moveRight.next({ columnId: this.columnId, cardId: id });
  }
}
