import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Anime, Respuesta } from '../interfaces/anime.interface';
import { FullAnime } from '../interfaces/full-anime.interface';
import { Personaje } from '../interfaces/character.interface';

const WEB_API_URL = environment.host;

@Injectable({
  providedIn: 'root',
})
export class AnimeListService {
  constructor(private http: HttpClient) {}

  getAnimeRecommendations() {
    return this.http
      .get(`${WEB_API_URL}recommendations/anime`)
      .pipe((res) => res);
  }
  getTopAnime() {
    return this.http
      .get<Respuesta>(`${WEB_API_URL}top/anime`)
      .pipe((res) => res);
  }
  getAnimeById(id: number) {
    return this.http
      .get<{ data: FullAnime }>(`${WEB_API_URL}anime/${id}/full`)
      .pipe((res) => res);
  }
  getCharacters(id: number) {
    return this.http
      .get<{ data: Personaje[] }>(`${WEB_API_URL}anime/${id}/characters`)
      .pipe((res) => res);
  }
  getAnimeBySearch(search: string) {
    return this.http
      .get<{ data: Anime[] }>(`${WEB_API_URL}anime?q=${search}`)
      .pipe((res) => res);
  }
}
