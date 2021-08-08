import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private query: string = '';
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY;
  private perPage: string = "&per_page=10";

  constructor(private _http: HttpClient) { }


  //obtenermos la imagen por medio de la palabra clave ingresada por el usuario   
  getImageQuery(query: string){
    return this._http.get(this.URL + '&q=' + query + this.perPage)
  }

  //Obtenemos las imagenes mediante la categoria escogida
  getImageCategory(category: string){
    return this._http.get(this.URL + '&category=' + category + this.perPage)
  }

}
