import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightOnMoveDirective } from './highlight-on-move.directive';
import { MyRouterLinkDirective } from './my-router-link.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HighlightOnMoveDirective,
    MyRouterLinkDirective
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'directives-and-forms';
}
