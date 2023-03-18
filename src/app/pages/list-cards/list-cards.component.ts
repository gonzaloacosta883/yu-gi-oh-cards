import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';
import { debounceTime } from 'rxjs/operators';

@Component({
	selector: 'app-list-cards',
	templateUrl: './list-cards.component.html',
	styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {

	inputSearchCard = new FormControl('');

	cardService: null | CardService = null;
	cardList: Card[] = [];
	offset: number = 0;


	constructor(cardService: CardService) {
		this.cardService = cardService;
	}

	// Este metodo se ejecuta una vez generado el componente
	// similar al documenContentLoaded en js
	ngOnInit() {
		this.inputSearchCard.valueChanges
			.pipe(debounceTime(1000)) //Aplica un delay en milisegundos
			.subscribe((respuesta) => {
				this.cardList = [];
				this.searchCards(respuesta);
			});
		this.searchCards();
	}

	onScroll() {
		this.offset += 100;
		this.searchCards();
	}

	searchCards(cardName: string | null = null) {
		this.cardService?.getListCards(cardName, this.offset)?.subscribe((respuesta) => {
			this.cardList = [...this.cardList, ...respuesta];
		});
	}

}
