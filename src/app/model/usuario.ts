export class Usuario {
    pkUsuario: number;
    strNombre: string;
    strApellido: string;
    strEmail: string;
    strTelefono: string;
    numEdad: number;
    strGenero: string;

    constructor() {
        this.pkUsuario = 0;
        this.strNombre = '';
        this.strApellido = '';
        this.strEmail = '';
        this.strTelefono = '';
        this.numEdad = 0;
        this.strGenero = '';
    }
}
