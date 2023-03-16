import { Component } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
	selector: 'app-list-cards',
	templateUrl: './list-cards.component.html',
	styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {

	cardService: null | CardService = null;
	cardList: Card[] = [];
	offset: number = 0;

	constructor(cardService: CardService) {
		this.cardService = cardService;
	}

	// Este metodo se ejecuta una vez generado el componente
	// similar al documenContentLoaded en js
	ngOnInit() {
		this.onScroll();
	}

	onScroll() {
		this.offset += 100;
		this.searchCards();
	}

	searchCards()
	{
		this.cardService?.getListCards(this.offset)?.subscribe((respuesta) => {
			this.cardList = [...this.cardList, ...respuesta];
		});
	}

}
