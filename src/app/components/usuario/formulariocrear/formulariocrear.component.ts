import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulariocrear',
  templateUrl: './formulariocrear.component.html',
  styleUrls: ['./formulariocrear.component.css']
})
export class FormulariocrearComponent {
  usuario: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {

  }

  crearUsuario(): void{
    this.usuarioService.guardarUsuario(this.usuario).subscribe(
    );
  }

}
