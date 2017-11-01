import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { Globals } from '../globals/globals';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [Globals]
})
export class UsersComponent implements  OnInit {


  constructor(private router: Router, private route: ActivatedRoute, private globals: Globals) {

    if (globals.is_logged_in == true) {
      console.log("logged in");
      router.navigate(['/1'], { relativeTo: this.route });
    } else {
      console.log("NOT logged in");
      router.navigate(['/0'], { relativeTo: this.route });
    }
  }

  ngOnInit(): void {
  }

}
