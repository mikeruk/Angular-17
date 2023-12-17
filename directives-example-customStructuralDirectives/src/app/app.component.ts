import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightOnMoveDirective } from './highlight-on-move.directive';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyStructuralDirective } from './my-structural.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HighlightOnMoveDirective,
    MyRouterLinkDirective,
    MyStructuralDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'directives-and-forms';
  isShown: boolean = true;

  toggle() {
    this.isShown = !this.isShown;

    //throw new Error('Method not implemented.');
  }
}
