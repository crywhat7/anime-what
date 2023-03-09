import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'anime-list',
    pathMatch: 'full'
  },
  {
    path: 'anime-list',
    loadChildren: () => import('./pages/anime-list/anime-list.module').then( m => m.AnimeListPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
