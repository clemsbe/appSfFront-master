import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Patiente } from '../patiente.component';


@Component({
  selector: 'app-search-patiente',
  templateUrl: './search-patiente.component.html',
})
export class SearchPatienteComponent{

//   searchTerms = new Subject<string>();
//   patiente$: Observable<Patiente[]>;

//   constructor
//     (private router: Router,
//      private patienteService: PokemonService 
//       ) {}
   
//   ngOnInit(): void {
//       this.pokemons$ = this.searchTerms.pipe(
//         debounceTime(300),
//         distinctUntilChanged(),
//         switchMap((term) => this.pokemonService.searchPokemonList(term))
//       );
//   }

//   search(term: string){

//     this.searchTerms.next(term);
//   }
//   goToDetail(pokemon: Pokemon){
//     const link = ['/pokemon', pokemon.id];
//     this.router.navigate(link);
//   }
}