import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  
    usuarios: Usuario[]= [];
  
    constructor(
      private usuarioService: UsuarioService,
    ) {}
  
    ngOnInit(): void {
      this.obtenerUsuarios();
    }
  
    obtenerUsuarios() {
      this.usuarioService.obtenerUsuarios().subscribe(
        (usuarios) => (this.usuarios = usuarios)
      );
    }

    eliminarUsuario(id: number) {
      this.usuarioService.eliminarUsuario(id).subscribe(
        () => this.ngOnInit()
      );
    }
}