import { Routes,  } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';



//After creating the navigation module with navigation component, we then have defined the HTML buttons in the navigation/nagivation.component.html
//Now its time to define their paths here:
export const routes: Routes = [
    {path:'', pathMatch: 'full', component: UserListComponent},
    {path:'user-list', component: UserListComponent},
    {path:'todo-list', component: TodoListComponent},
];
