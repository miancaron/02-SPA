import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {

  termino: string;
  
  heroes: Heroe[];
  
  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router) {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      console.log('buscar-heroe -> constructor ' + this.termino);
    } );

   }

  ngOnInit(): void {

    console.log('buscar-heroe -> ngOnInit');
    this.heroes = this._heroesService.buscarHeroes(this.termino);
    console.log(this.heroes);

  }

  verHeroe( idx: number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
