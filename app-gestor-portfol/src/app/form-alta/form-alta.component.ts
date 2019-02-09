import { Component, OnInit } from "@angular/core";
import { PortfoliosService } from "../portfolios.service";

@Component({
  selector: "app-form-alta", // <app-form-alta> etiqueta </app-form-alta>
  templateUrl: "./form-alta.component.html",
  styleUrls: ["./form-alta.component.css"]
})
export class FormAltaComponent implements OnInit {
  titulo: string;
  etiqueta_nombre: string;
  placeholder_nombre: string;
  nombreIntroducido: string;
  //La descipción
  etiqueta_descripcion: string;
  placeholder_descripcion: string;
  descripcion_introducida: string;
  //El archivo
  etiqueta_archivo: string;
  placeholder_archivo: string;
  archivo_subido: string;
  servPortfolio: PortfoliosService;

  constructor(sp: PortfoliosService) {
    this.servPortfolio = sp;
  }

  ngOnInit() {
    this.titulo = "Alta de portfolios";
    this.etiqueta_nombre = "Nombre y Apellidos";
    this.placeholder_nombre = "Introduzca Nombre y Apellidos";

    //La descipción
    this.etiqueta_descripcion = "Escriba aquí";
    this.placeholder_descripcion = "Esciba aquí";

    //El archivo
    this.etiqueta_archivo = "Subir archivo";
    this.placeholder_archivo = "Suba archivo aquí";
  }
  //Botón Nombre
  limpiar() {
    this.nombreIntroducido = "";
  }
  //Botón descripción
  limpiar2() {
    this.descripcion_introducida = "";
  }
  //Botón archivo
  limpiar3() {
    this.archivo_subido = "";
  }
  anadir() {
    this.servPortfolio.alta(
      this.nombreIntroducido,
      this.descripcion_introducida,
      this.archivo_subido
    );
    console.log("<<<DAR ALTA>>>");
  }
}
