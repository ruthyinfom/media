import { Component } from '@angular/core';

@Component({
  selector: 'app-calcula-media',
  imports: [],
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.scss',
})
export class CalculaMedia {
  protected mediaParcial: number | undefined
  protected mediaFinal: number | undefined
  protected situação: string

  constructor() {
    this.mediaParcial = undefined
    this.mediaFinal = undefined
    this.situação = ""
  }


  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number) {
    this.mediaParcial = 
      (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10
  }

  calcularMediaFinal(Fn: number) {
    const mp = this.mediaParcial
    let mf: number | undefined = undefined

    if (mp) {
      mf =  (mp + Fn) / 2
    }
    this.mediaFinal = mf 

    if (mf >= 60) {

    } 
  }

  
}
