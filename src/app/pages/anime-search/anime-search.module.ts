import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimeSearchPageRoutingModule } from './anime-search-routing.module';

import { AnimeSearchPage } from './anime-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimeSearchPageRoutingModule
  ],
  declarations: [AnimeSearchPage]
})
export class AnimeSearchPageModule {}
