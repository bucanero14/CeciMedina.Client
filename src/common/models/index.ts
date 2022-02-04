export interface LoginResponse {
    username: string,
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    fechaDeNacimiento: string,
    token: string,
    expiration: Date,
    roles: string[]
}

export interface SucursalModel {
    nombre: string,
    direccion: string,
    telefono: string,
    tienePv: boolean
}

export interface UserModel {
    username: string,
    token: string,
    expiration: Date,
    apellidoPaterno: string,
    apellidoMaterno: string,
    fechaDeNacimiento: Date,
    nombre: string,
    roles: string[]
  }