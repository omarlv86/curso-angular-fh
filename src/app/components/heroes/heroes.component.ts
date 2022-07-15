import { Component, OnInit } from '@angular/core';

import { HeroesService, Heroe} from '../../servicios/heroes.service'
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heoresService:HeroesService, 
              private router:Router
              ) { }

  ngOnInit(): void {
    this.heroes = this._heoresService.getHeores();
    //console.log(this.heroes)
  }

  verHeroe(idx: number){
    //console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }


}

