import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../interfaces/anime.interface';

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
}
