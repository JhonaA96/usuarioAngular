import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formularioeditar',
  templateUrl: './formularioeditar.component.html',
  styleUrls: ['./formularioeditar.component.css']
})

export class FormularioeditarComponent {

  usuario: Usuario= new Usuario();
  id: number = 0;


  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.obtenerUsuario(this.id);
  }

  obtenerUsuario(id: number){
    this.usuarioService.obtenerUsuario(id).subscribe(
      (user) => this.usuario = user
    );
  }
  
  actualizarUsuario(id: number, usuario: Usuario) {
    this.usuarioService.editarUsuario(id, usuario).subscribe();
  }
}
