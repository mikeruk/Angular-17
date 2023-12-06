    Modules
    Modules are standalone. 

    Routing
source:
https://stackoverflow.com/questions/38832851/angular-routerlink-does-not-navigate-to-the-corresponding-component - see last answer from Nov 10 at 6:24
https://angular.io/guide/router-reference


This is Variant 1 to add routing in HTML file:
<div>   
      //Here are some addtional attributes, but routerLinkActive and ariaCurrentWhenActive is not always required.
    <a class="nav-btn" routerLink="/user-list" routerLinkActive="active" ariaCurrentWhenActive="page">Users List</a>
    <a class="nav-btn" routerLink="/todo-list" routerLinkActive="active" ariaCurrentWhenActive="page">Todos List</a>
</div>
To make those routerLink="/user-list" (above) active and actually working, do this:
    
1. After you have added a Routing Module on App level, if you add this module on a sub-component, the browser will return error. Therefore DO NOT ADD THE WHOLE ROUNTING MODULE TO ANY SUBCOMPONENT!!!
2. To get routing functionality import only certain class from the '@angular/router', but no need to import the whole Routing module in a sub-module.
3. Example with a NavigationComponent. In its .html file the NavigationComponent needs to use attributes like routerLink="" OR routerLinkActive="" OR ariaCurrentWhenActive="". The solution is to add only those Classes separately in the NavigationComponent, but not to add the whole RoutingModule


    This is how it works:
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
}

#In other words, if a component needs to implement in the .html file any classes, those classes can be also added indivudually in the same component. Especially when it comes for routing, because the RoutingModule cannot be added to a sub-component.

