import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './button-component/containers/buttons/buttons.component';
import { SidebarComponent } from './button-component/containers/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'button-component',
    pathMatch: 'full'
  },
  {
    path: 'button-component',
    loadChildren: () =>
      import('./button-component/routing/button-component-routing.module').then(m => m.ButtonComponentRoutingModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
