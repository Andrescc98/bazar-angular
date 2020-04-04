export interface Producto{
    id_producto:number;
    titulo:string;
    descripcion:string;
    img_producto:any;
    precio:number;
    stock?:number;
    f_publicacion?:Date;
    id_usuario:number;
    id_categoria:number;
}