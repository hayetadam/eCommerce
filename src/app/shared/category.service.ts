import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from './Category';

@Injectable()
export class CategoryService {

  private urlApi:string = 'http://localhost:3000/category';
  
    constructor(private http:HttpClient) { }
  
    getAllCategorys():Observable<Category[]>{
      return this.http.get<Category[]>(this.urlApi);
    }
  
    ajouterCategory(category):Observable<Category>{
      return this.http.post<Category>(this.urlApi, category);
    }
  
    getCategoryById(id:number):Observable<Category> {
        return this.http.get<Category>(this.urlApi+'/'+id);
  }
  
    removeCategory(id):Observable<any>{
        return this.http.delete(this.urlApi+'/'+id);
    }
  
    updateCategory(id:number, category:Category):Observable<Category> {
      return this.http.patch<Category>(this.urlApi+'/'+id,
       category);
  }

} 
