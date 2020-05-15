import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {

  termino: string;
  
  heroes: Heroe[];
  
  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      console.log(this.termino);
    } );

   }

  ngOnInit(): void {

    this.heroes = this._heroesService.buscarHeroes(this.termino);
    console.log(this.heroes);

  }

}
