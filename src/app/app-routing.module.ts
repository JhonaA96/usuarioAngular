import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariocrearComponent } from './components/usuario/formulariocrear/formulariocrear.component';
import { FormularioeditarComponent } from './components/usuario/formularioeditar/formularioeditar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/usuarios',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: UsuarioComponent
  },
  {
    path: 'formularioCrearUsuario',
    component: FormulariocrearComponent
  },
  {
    path: 'formularioEditarUsuario/:id',
    component: FormularioeditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
