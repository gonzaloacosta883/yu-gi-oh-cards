import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';
import { ListCardsComponent } from './pages/list-cards/list-cards.component';

const routes: Routes = [
  {'path': '', 'component': ListCardsComponent},
  {'path': 'card/:id-card', 'component': DetailCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
