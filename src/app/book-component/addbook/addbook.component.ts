import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { bookInformation } from 'src/app/Book-Store Model/bookInformation';
import { BookStoreServicesService } from 'src/app/book-store-services.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  constructor(private route : Router, private activatedRoute : ActivatedRoute, private http : BookStoreServicesService) { }

  id : number;
  data : bookInformation = null;
  ngOnInit(): void {
    this.signOfType = new FormGroup({      
      'bookName' : new FormControl(null, [Validators.required]),
      'author': new FormControl(null, [Validators.required]),        
      'location' : new FormControl(null, [Validators.required]),
      'category' : new FormControl(null,[Validators.required]),
      'pages' : new FormControl(null,[Validators.required])
    })
    this.activatedRoute.params.subscribe((params : Params) => {
    this.id = +this.activatedRoute.snapshot.params['id'];
    if(this.id != 0){
      this.http.getBook(this.id).subscribe(d => this.data = d);
    }
  });
  }
  signOfType: FormGroup;

  OnSubmit(){
    const bookStores : bookInformation = {
      bookId : 0,
      bookName : this.signOfType.get('bookName').value.toString(),
      author : this.signOfType.get('author').value.toString(),
      location : this.signOfType.get('location').value.toString(),
      category : this.signOfType.get('category').value.toString(),
      pages : +this.signOfType.get('pages').value.toString()
    };    
    this.http.postBook(bookStores).subscribe(s => console.log(s),e => console.log(e));
  }

}
