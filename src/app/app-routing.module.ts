import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarCitasComponent } from './components/buscar-citas/buscar-citas.component';
import { CitasComponent } from './components/citas/citas.component';
import { ModificacionCitasComponent } from './components/modificacion-citas/modificacion-citas.component';

const routes: Routes = [
  {path: '', component: CitasComponent},
  {path: 'asignacion', component: CitasComponent},
  {path: 'modificacion', component: ModificacionCitasComponent},
  {path: 'buscar', component: BuscarCitasComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
