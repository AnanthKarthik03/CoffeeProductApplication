import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  pageType = '';
  constructor(private routers: Router, public router: ActivatedRoute) {}

  ngOnInit(): void {
    this.pageType = this.router.snapshot.url[0].path;
  }

  home() {
    this.routers.navigate(['/home']);
  }
  coffeeDetails() {
    this.routers.navigate(['/coffeeDetails']);
  }
}
