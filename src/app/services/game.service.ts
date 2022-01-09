import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos:Game[] =[];

  constructor(
    private http: HttpClient,
    private db: AngularFirestore
  ) { }

  getNominados(){
    if(this.juegos.length > 0){
      //no tenemos juegos
      console.log('desde cache');
      return of(this.juegos);
    }else{
      console.log('desde internet');

      return this.http.get<Game[]>(`${environment.baseUrl}/api/goty`).pipe(
        tap(
          juegos => this.juegos = juegos
          )
          );
    }
  }

  votarJuego(id:string){
    return this.http.post(`${environment.baseUrl}/api/goty/${id}`, {}).pipe(
      //devolver error de backend
      catchError(err => {
        // reportar Error en la peticion
        return of(err.error);
      })
    );

  }

  getDataToBar(){
    // this.db.collection('goty').valueChanges()
    //   .pipe(
    //         //transformar respuesta del backend a los datos que necesitamos
    //     // map( (resp: Game) => resp.map( ({ name, votos }) => ({ name, value: votos }) ))

    //   )
    //   .subscribe( juegos => {
    //     this.juegos = juegos;
    //   });
  }




}
