import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  BASE_URL = 'http://localhost:8080/usuario/'
  private header = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
  ) {}

  obtenerUsuarios():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.BASE_URL + 'consultarUsuarios', {headers: this.header});
  }

  obtenerUsuario(id: number):Observable<Usuario> {
    return this.http.get<Usuario>(this.BASE_URL + 'consultarUsuario/' + id, {headers: this.header});
  }

  guardarUsuario(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>(this.BASE_URL + 'guardarUsuario', usuario, {headers: this.header});
  }

  eliminarUsuario(id: number) {
    return this.http.delete(this.BASE_URL + 'eliminarUsuario/' + id, {headers: this.header});
  }

  editarUsuario(id: number, usuario: Usuario):Observable<Usuario> {
    return this.http.put<Usuario>(this.BASE_URL + 'actualizarUsuario/' + id, usuario, {headers: this.header});
  }
}
