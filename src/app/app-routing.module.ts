import { CreateContactComponent } from './create-contact/create-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from "./dash-board/dash-board.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashBoardComponent,
  }, {
    path: 'create-contact',
    component: CreateContactComponent,
  }, {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
