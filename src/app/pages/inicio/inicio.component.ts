import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public juego: Game[] = [];
  constructor(
    private db: AngularFirestore
    ) { }

    ngOnInit(){


    this.db.collection('goty').valueChanges()
    .pipe(
      //transformar respuesta del backend a los datos que necesitamos
      // map( (juego:Game) => juego.map( ({name, votos}) => ({id, name, votos, url }) ) )
     map((juego)=>{
       console.log('map', juego);
     })
    )

    .subscribe(
      resp => {
        console.log(resp);
      }
    )
  }

}
