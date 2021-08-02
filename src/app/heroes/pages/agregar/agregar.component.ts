import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap }from 'rxjs/operators';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    width: 100%;
    border-radius: 5px;
  `
  ]
})
export class AgregarComponent implements OnInit {

    publishers = [
      {
        id: 'DC Comics',
        desc: 'DC - Comics'
      },
      {
        id: 'Marvel Comics',
        desc: 'Marvle - Comics'
      }
    ];

    heroe: Heroe = {
      superhero: '',
      alter_ego: '',
      characters: '',
      first_appearance: '',
      publisher: Publisher.DCComics,
      alt_img: '',
    };
  constructor(private heroService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }
    
    this.activatedRoute.params 
      .pipe(
        switchMap( ({id}) => this.heroService.getHeroePorId(id))
      )      
        .subscribe( heroe => this.heroe = heroe );

  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){
      //Actualizar
       this.heroService.actualizarHeroe( this.heroe)
           .subscribe( heroe => console.log('Actualizando', heroe))
    } else{
      //Crear
        this.heroService.agregarHeroe(this.heroe)
          .subscribe( heroe => {
              this.router.navigate(['/heroes/editar', heroe.id])
          })
    }

    this.heroService.agregarHeroe(this.heroe)
        .subscribe(resp => {
          console.log('Respuesta', resp);
        });
  }

}
