import { Component } from '@angular/core';
import Emoji from 'emoji-store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  getEmoji(name, count) {
    return Emoji.get(name, count);
  }

}
