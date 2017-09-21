import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  profile: any;
  constructor(private http:Http) { }


  addProf(profile){
      //console.log(profile);
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('routes/addprofile', profile,{headers: headers})
        .map(res => res.json());
    }

  getProf(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('routes/profiles', {headers: headers})
      .map(res => res.json());
  }
}
