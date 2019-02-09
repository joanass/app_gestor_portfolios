import { Component, OnInit } from "@angular/core";
import { PortfoliosService } from "../portfolios.service";
import { Portfolio } from "app/portfolio";

@Component({
  selector: "app-form-baja",
  templateUrl: "./form-baja.component.html",
  styleUrls: ["./form-baja.component.css"]
})
export class FormBajaComponent implements OnInit {
  titulo: string;
  etiqueta_nombre: string;
  placeholder_nombre: string;
  nombreIntroducido: string;
  servPortfolio: PortfoliosService;
  private arrayPortfolios: Array<Portfolio>;
  constructor(sp: PortfoliosService) {
    this.servPortfolio = sp;
  }

  ngOnInit() {
    this.titulo = "Baja de portfolios";
    this.etiqueta_nombre = "Nombre y Apellidos";
    this.placeholder_nombre = "Introduzca Nombre y Apellidos";
    this.arrayPortfolios = this.servPortfolio.listar();
  }
  retirar() {
    this.servPortfolio.baja(this.nombreIntroducido);
    console.log("<<<DADO DE BAJA>>>");
  }
  cambiarCampoForm(nombre: string): void {
    alert(nombre);
  }
}
