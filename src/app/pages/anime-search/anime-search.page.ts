import { Component, OnInit } from '@angular/core';
import { Anime } from '../interfaces/anime.interface';
import { AnimeListService } from '../services/anime-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-search',
  templateUrl: './anime-search.page.html',
  styleUrls: ['./anime-search.page.scss'],
})
export class AnimeSearchPage implements OnInit {
  searchTerm = '';
  timeoutID: NodeJS.Timeout | undefined;
  animesFounded: Anime[] = [];

  constructor(private animeService: AnimeListService, private ruta: Router) {}

  ngOnInit() {
    this.searchAnime();
  }

  // Buscar anime por busqueda, debounceTime(500)
  searchAnime() {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(() => {
      this.animeService.getAnimeBySearch(this.searchTerm).subscribe((res) => {
        if (!res) {
          this.animesFounded = [];
        } else {
          this.animesFounded = res.data;
        }
      });
    }, 250);
  }

  // Moverse a otra ruta
  goToRoute(ruta: string) {
    console.log(ruta);
    this.ruta.navigateByUrl(ruta);
    this.ruta.navigate([ruta]);
  }

  clickAnime() {
    console.log('Di click en un anime');
  }
}
