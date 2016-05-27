import {Component} from '@angular/core'

/**
 * Created by mak on 5/27/16.
 */
@Component({
  selector: 'app',
  template: `<h4 class="panel panel-heading">Hello {{ name }}!</h4>`
})
export class AppComponent {
  private name: string

  constructor() {
    this.name = 'Angular 2'
  }
}
