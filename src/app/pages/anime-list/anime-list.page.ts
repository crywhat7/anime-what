import { Component, OnInit } from '@angular/core';
import { AnimeListService } from '../services/anime-list.service';
import { Respuesta, Anime } from '../interfaces/anime.interface';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.page.html',
  styleUrls: ['./anime-list.page.scss'],
})
export class AnimeListPage implements OnInit {
  topAnimes: Anime[] = [];
  constructor(private animeService: AnimeListService) {}

  ngOnInit() {
    // this.getAnimeRecommendations();
    this.getTopAnime();
  }

  getAnimeRecommendations() {
    this.animeService.getAnimeRecommendations().subscribe((res) => {
      console.log(res);
    });
  }

  getTopAnime() {
    this.animeService.getTopAnime().subscribe((res) => {
      this.topAnimes = res.data;
      console.log(this.topAnimes);
    });
  }
}
