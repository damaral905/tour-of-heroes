import { Component } from '@angular/core';

let heroCount = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
/*   title = 'la revue des 1 héros ';
 */  titleStyle = {'font-family' : 'Arial', 'color' : 'red'};
  username = '';
  heroes = [
    'Batman',
    'Superman',
    'Wonderwoman',
    'Ironman'

  ];
  heroToAdd = '';
  addHero() {
    /* this.title = 'La tour des ' + (heroCount++) + ' héros'; */
    this.heroes.push(this.heroToAdd);
/*     this.title = 'La tour des ' + this.heroes.length + ' héros';
 */  }
}