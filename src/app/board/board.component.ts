import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board$;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.board$ = this.dataService.getBoard();
  }
  onCardAdd({ message, id }) {
    console.log('method called');
    console.log({ message, id });
    this.dataService.addCard(id, message);
  }
  onMoveRight({ columnId, cardId }) {
    console.log({ columnId, cardId });
    this.dataService.moveCardRight(columnId, cardId);
  }
  onMoveLeft({ columnId, cardId }) {
    console.log({ columnId, cardId });
    this.dataService.moveCardLeft(columnId, cardId);
  }
}
