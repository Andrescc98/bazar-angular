export interface Comentario{
    id_comentario:number;
    contenido:string;
    visto:boolean;
    id_usuario:number;
    f_creacion?:Date;
    id_producto:number;
}