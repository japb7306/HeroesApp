import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
=======
>>>>>>> a63219da7e5d9d273b83e17cb1f53094ee5ddcd7
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

<<<<<<< HEAD
    termino: string = '';
    heroes: Heroe[] = [];
    heroeSeleccionado!: Heroe | undefined;
=======
  termino: string = '';
  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService) { }
>>>>>>> a63219da7e5d9d273b83e17cb1f53094ee5ddcd7


    constructor(private heroesService: HeroesService) { }

    ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe( heroes => this.heroes = heroes);
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent){
    // TODO: Validar si es un string vacio
    if(!event.option.value){  
      this.heroeSeleccionado = undefined;   
      return;
    }    
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;  
    
    this.heroesService.getHeroePorId(heroe.id!)
        .subscribe(heroe => this.heroeSeleccionado = heroe);
  }

  buscando(){
    this.heroesService.getHeroes()
        .subscribe( heroes => this.heroes = heroes);
  }

}
