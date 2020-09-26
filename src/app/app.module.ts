import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BoldGreenTextDirective } from './bold-green-text.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MovieListComponent,
    BoldGreenTextDirective,
    DisplayMoviesDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
