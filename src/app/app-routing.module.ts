import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'anime-list',
    pathMatch: 'full',
  },
  {
    path: 'anime-detail',
    redirectTo: 'anime-list',
    pathMatch: 'full',
  },
  {
    path: 'anime-list',
    loadChildren: () =>
      import('./pages/anime-list/anime-list.module').then(
        (m) => m.AnimeListPageModule
      ),
  },
  {
    path: 'anime-detail/:id',
    loadChildren: () =>
      import('./pages/anime-detail/anime-detail.module').then(
        (m) => m.AnimeDetailPageModule
      ),
  },
  {
    path: 'anime-search',
    loadChildren: () => import('./pages/anime-search/anime-search.module').then( m => m.AnimeSearchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
