import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }

  Multiplicacion(a:number, b:number ){
    return a*b;
  }

  Texto (){
    return "Hola esta es una funcion que retorna texto";
  }

  TextoFallarPrueba (){
    return "Hola esta funcion tiene que hacer fallar la prueba unitaria";
  }

  DameUnCarro (){
    return new Telefono("OnePlus", "5t")
  }

  TextoAlrevez(palabra:string){

    var splitPalabra = palabra.split(""); 
 
    var reversa = splitPalabra.reverse(); 
 
    var resultado = reversa.join(""); 
    
    return resultado; 
    
  }

}

export class Telefono {
  fabricante:string;
  linea:string;

  constructor(_fabricante:string, _linea:string) {
    this.fabricante=_fabricante;
    this.linea = _linea;
  }
}



