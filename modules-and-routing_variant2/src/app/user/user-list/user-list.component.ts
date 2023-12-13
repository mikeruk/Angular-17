import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../user.service';
import { User } from '../../types/User';
import { NgFor } from '@angular/common';
import { GlobalLoaderService } from '../../core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SharedModule, NgFor],
  providers: [UserService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  userList: User[] = [];

  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService
  ) {}

/*   ngOnInit(): void {
    this.globalLoaderService.showLoader();
    setTimeout(() => {
      this.userService.fetchUsers().subscribe((users) => {
        this.userList = users;
        this.globalLoaderService.hideLoader();
      });
    }, 3000);
  } */


  ngOnInit(): void {
    this.globalLoaderService.showLoader();
    setTimeout(() => {

      this.userService.fetchUsers().subscribe({
        next:(users) => {
          this.userList = users;
          this.globalLoaderService.hideLoader();
        },
        error: (err) => {
          console.error(`Error: ${err}`);
          this.globalLoaderService.hideLoader();
        }
      });

    }, 1000);
  }

}
