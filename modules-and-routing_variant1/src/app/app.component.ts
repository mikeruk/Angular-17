import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    CoreModule, 
    HttpClientModule,
    UserModule,
    HttpClientModule,
    TodoModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modules-and-routing';


  constructor(private router:Router){}

  navigateTo(path:string){
    this.router.navigate([path])
    
  }
}
