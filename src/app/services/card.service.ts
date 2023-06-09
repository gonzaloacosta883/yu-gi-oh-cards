import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card.interface'
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class CardService {

    httpService: null | HttpClient = null;
    API_YU_GI_OH_URL: string = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

    constructor(http: HttpClient) {
        this.httpService = http;
    }

    // pipe = tuberia = filtro;
    getListCards(name: string | null, offset: number = 0) {

        const params: any = {
            num: 100,
            offset: offset
        };

        if (name) params.fname = name;

        return this.httpService?.get<Card[]>(this.API_YU_GI_OH_URL, { params })
            .pipe(
                map((respuesta: any) => respuesta.data)
            );
    }
}
