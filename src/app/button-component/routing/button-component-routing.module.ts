import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from '../containers/buttons/buttons.component';

const routes: Routes = [
  { path: '', redirectTo: 'container' },
  { path: 'button', component: ButtonsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonComponentRoutingModule { }
