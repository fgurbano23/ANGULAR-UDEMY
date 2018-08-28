import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PadreComponent} from './padre/padre.component';
import {HijoComponent} from './padre/hijo/hijo.component';
import {ContactoComponent} from './contacto/contacto.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PadreComponent
  },
  {
    path: 'home/:nombre',
    component: PadreComponent
  },
  {
    path: 'hijo',
    component: HijoComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '**',
    component: PadreComponent
  }
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
