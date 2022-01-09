import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy  {

  results: any[]=[
    {
      "name": "JuegoNAme 1",
      "value": 80
    },
    {
      "name": "JuegoNAme 2",
      "value": 50
    },
    {
      "name": "JuegoNAme 3",
      "value": 70
    },
    {
      "name": "JuegoNAme 4",
      "value": 80
    },
  ]

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'votos';

  colorScheme = 'nightLights';
  // intervalo;



  constructor() {

    // console.log(Math.round(Math.random() * 500));

    // this.intervalo = setInterval(()=>{
    //   const newResults = [...this.results];
    //   console.log('tick');
    //   for(let i in newResults){
    //     newResults[i].value = Math.round(Math.random() * 500)
    //   }

    //   this.results =  [...newResults];//se crea un nuevo arreglo rompiendo la relacion inicial
    // }, 1500);



  }

  ngOnDestroy(): void {
  // clearInterval(this.intervalo);


  }

  onSelect() {
    console.log(event);
  }

}
