export interface Empresa {
    id: number;
    nombre: string;
    empresa: string; // Mantener esta propiedad
    telefono: string;
    correo: string;
    administrador?: {
      nombreAdmin: string;
      correoAdmin: string;
    };
  }
  