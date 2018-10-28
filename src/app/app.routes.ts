import { Routes } from '@angular/router';
import { VirtualComponent } from './virtual/virtual.component';
import { DragComponent } from './drag/drag.component';
import { PaisesComponent } from './paises/paises.component';

export const ROUTES: Routes = [
    {
        path: 'scroll',
        component:  VirtualComponent
    },
    {
        path: 'drag_basico',
        component:  DragComponent
    },
    {
        path: 'drag_list',
        component:  PaisesComponent
    },
    // { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'scroll' }, // Cualquier ruta vacia redirecciona al home
    { path: '**', pathMatch: 'full', redirectTo: 'scroll' } // Cualquier ruta ** redirecciona al home
];
