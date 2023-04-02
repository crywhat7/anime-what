import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeSearchPage } from './anime-search.page';

const routes: Routes = [
  {
    path: '',
    component: AnimeSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeSearchPageRoutingModule {}
