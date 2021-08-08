import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service'
import { Router, RouterModule, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private _imageService: ImageService,
                      _route: ActivatedRoute) { }


  search: string = '';
  query: string = '';
  images: any[] = [];
  imagesFound: boolean = false;
  searching: boolean = false;
  lista:string[]=["science", "education", "people", "feelings", "computer", "buildings"];
  seleccionado:string = '';
  b404: boolean= false;

  handleSuccess(data: any){
    this.images = data.hits;
    if(this.images.length > 0){
      this.imagesFound = true;
      this.b404 = false
    }else{
      this.b404 = true
    }
  }

  handleError(error: any){
    console.log(error);
  }

  findCategory(category: string){
    this.searching = true;
    
  
    return this._imageService.getImageCategory(category).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }

  searchImages(query: string){
    this.searching = true;
    this.query = '';
    
    return this._imageService.getImageQuery(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }


}
