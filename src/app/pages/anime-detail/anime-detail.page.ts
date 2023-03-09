import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullAnime } from '../interfaces/full-anime.interface';
import { AnimeListService } from '../services/anime-list.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.page.html',
  styleUrls: ['./anime-detail.page.scss'],
})
export class AnimeDetailPage implements OnInit {
  constructor(
    private animeService: AnimeListService,
    private activated: ActivatedRoute
  ) {}
  anime: FullAnime = {} as FullAnime;
  imageUrl: string = '';
  trailerUrl: string = '';
  videoUrl: string = '';

  ngOnInit() {
    this.activated.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.getAnimeById(Number(id));
    });
  }

  getAnimeById(id: number) {
    this.animeService.getAnimeById(id).subscribe((res) => {
      this.anime = res.data;
      this.imageUrl = this.anime.images.jpg.large_image_url;
      this.trailerUrl = this.anime.trailer.images.maximum_image_url;
      this.videoUrl = this.anime.trailer.url;
    });
  }
}
