import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { User } from "./User";

@Injectable()
export class UserService {
  private urlApi:string = 'http://localhost:3000/user';
  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<User[]>{

    return this.http.get<User[]>(this.urlApi);
}
ajouterUser(user): Observable<User[]>{
  
  return this.http.post<User[]>(this.urlApi, user); 

}

}
