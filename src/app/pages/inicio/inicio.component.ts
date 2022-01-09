import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, catchError } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // public juego: Game[] = [];

  juegos:any[]=[];

  constructor(
    private db: AngularFirestore
    ) { }

    ngOnInit(){

      // this.db.collection('goty').valueChanges()
      // .pipe(
      //       //transformar respuesta del backend a los datos que necesitamos
      //   // map( (resp: Game) => resp.map( ({ name, votos }) => ({ name, value: votos }) ))

      // )
      // .subscribe( juegos => {
      //   this.juegos = juegos;
      // });

    this.db.collection('goty').valueChanges()
    .pipe(

     map((juegos)=>{
       console.log('map', juegos);

     })
    ).subscribe(
      juegos => {
        juegos = juegos;
        console.log(juegos);
      }
    )
  }

}
