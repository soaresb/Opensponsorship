import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-profiles',
  //templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  template: `
  <h1>Here's a list of the data in the database</h1>

  <table>
  <td>
    <tr *ngFor="let item of items">
       <h5>Name: {{item.name}} &nbsp;&nbsp;&nbsp; Team: {{item.team}} &nbsp;&nbsp;&nbsp; Date of Birth: {{item.dob}} &nbsp;&nbsp;&nbsp; Association: {{item.association}}</h5>
   </tr>
  </td>
</table>
`
})
export class ProfilesComponent implements OnInit {

  constructor(private authService:AuthService) { }
  items: any;
  ngOnInit() {
    this.authService.getProf().subscribe(data => {
      //console.log(data.profile[0].name);
      this.items=data.profile;
      console.log(this.items);
    });


  }

}
