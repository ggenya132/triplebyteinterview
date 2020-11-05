import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  board;

  boardSubject = new BehaviorSubject('');
  board$ = this.boardSubject.asObservable();

  constructor() {
    const board = localStorage.getItem('board');
    console.log({ board });
    if (board) {
      this.board = JSON.parse(board);
    } else {
      this.board = {
        columns: [
          {
            id: 1,
            name: 'Winnie',
            cards: [
              { content: 'content', id: 1 },
              { content: 'content', id: 2 },
            ],
            color: '#8E6E95',
          },
          {
            id: 2,
            name: 'Bob',
            cards: [
              { content: 'content', id: 1 },
              { content: 'content', id: 2 },
            ],
            color: '#39A59C',
          },
          {
            id: 3,
            name: 'Thomas',
            cards: [
              { content: 'content', id: 1 },
              { content: 'content', id: 2 },
            ],
            color: '#344759',
          },
          {
            id: 4,
            name: 'George',
            cards: [
              { content: 'content', id: 1 },
              { content: 'content', id: 2 },
            ],
            color: '#E8741E',
          },
        ],
      };
    }
    this.boardSubject.next(this.board);
  }

  getBoard() {
    return this.board$;
  }
  addCard(columnId, message) {
    const parsedId = parseInt(columnId);

    const foundColum = this.board.columns.find(
      (column) => column.id === parsedId
    );
    console.log({ foundColum });
    this.board.columns
      .find((column) => column.id === parsedId)
      .cards.push({ content: message, id: foundColum.cards.length + 1 });

    localStorage.setItem('board', JSON.stringify(this.board));
  }
  moveCardLeft(columnId, cardId) {
    const parsedId = parseInt(columnId);

    const foundColum = this.board.columns.find(
      (column) => column.id === parsedId
    );
    const foundCard = foundColum.cards.find((card) => card.id == cardId);
    foundColum.cards = foundColum.cards.filter((card) => card.id !== cardId);

    const nextColumn = this.board.columns.find(
      (column) => column.id === parsedId - 1
    );

    nextColumn.cards.push(foundCard);
    localStorage.setItem('board', JSON.stringify(this.board));
  }
  moveCardRight(columnId, cardId) {
    const parsedId = parseInt(columnId);

    const foundColum = this.board.columns.find(
      (column) => column.id === parsedId
    );
    const foundCard = foundColum.cards.find((card) => card.id == cardId);
    foundColum.cards = foundColum.cards.filter((card) => card.id !== cardId);

    const nextColumn = this.board.columns.find(
      (column) => column.id === parsedId + 1
    );

    nextColumn.cards.push(foundCard);
    localStorage.setItem('board', JSON.stringify(this.board));
  }
}
