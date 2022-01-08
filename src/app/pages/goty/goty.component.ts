import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/interfaces';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[]=[];

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.getNominados().subscribe( game =>{
      console.log(game);
      this.juegos = game
    });
  }

}
