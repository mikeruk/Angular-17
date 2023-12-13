import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgIf } from '@angular/common';
//import { SpinnerComponent } from '../../shared/spinner/spinner.component';

//We first added the HttpClientModule in the AppComponent.
//So, when you inject HttpClient into a component constructor,
//Angular's DI system looks at the module hierarchy to find the
//closest available instance of HttpClient. Since you added
//HttpClientModule to the root module (AppModule), Angular's DI system
//provides the root instance of HttpClient to any component that
//injects it, regardless of where that component is in the
//component tree.
//In other words, despite this HttpClient comes FROM  '@angular/common/http', Angular
//will inject it from the closest available instance, which in our case
// is the highest root -> the AppModule, and not from the namespace '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import { GlobalLoaderService } from './global-loader.service';



@Component({
  selector: 'app-global-loader',
  standalone: true,
  imports: [SharedModule, NgIf],
  templateUrl: './global-loader.component.html',
  styleUrl: './global-loader.component.css',
})
export class GlobalLoaderComponent {

  constructor(public globalLoaderService: GlobalLoaderService){

  }


}
