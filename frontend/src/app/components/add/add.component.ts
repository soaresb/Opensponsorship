import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: String;
  dob: String;
  nationality: String;
  location: String;
  association: String;
  team: String;
  gender: String;
  sports: String;
  about: String;
  interests: String;
  charities: String;
  facebook: String;
  instagram: String;
  twitter:String;
  snapchat: String;
  youtube: String;
  twitch: String;
  pets: String;
  drinks: String;
  married: String;

  constructor(private authService:AuthService, private router:Router, private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  addProfile(){
    const profile = {
      name: this.name,
      dob: this.dob,
      nationality: this.nationality,
      location: this.location,
      association: this.association,
      team: this.team,
      gender: this.gender,
      sports: this.sports,
      about: this.about,
      interests: this.interests,
      charities: this.charities,
      facebook: this.facebook,
      instagram: this.instagram,
      twitter: this.twitter,
      snapchat: this.snapchat,
      youtube: this.youtube,
      twitch: this.twitch,
      pets: this.pets,
      drinks: this.drinks,
      married: this.married
    }
    console.log(profile);
    if (this.name != undefined){
    this.authService.addProf(profile).subscribe(data =>{
      if(data.success){
        console.log("it worked");
        this.router.navigate(['/']);

      } else{
        console.log(data);
      }
    });
  } else{
    this.flashMessage.show('Please fill in the Name field', {cssClass: 'alert-danger', timeout:3000});
    window.scrollTo(0,0);
    this.router.navigate(['/add']);
  }

}
}
