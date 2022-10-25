import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Route } from '@angular/router';
import { bookInformation } from '../Book-Store Model/bookInformation';
import { BookStoreServicesService } from '../book-store-services.service';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {
  bookInfo : bookInformation[] = []
  constructor(private bookService : BookStoreServicesService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.bookService.getAllBookList().subscribe(
        data => {
          this.bookInfo = data
        }
      );
  }

  onDelete(id : number){
    console.log(id);
    this.bookService.deleteBook(id).subscribe();
    this.bookService.getAllBookList().subscribe(
      data => {
        this.bookInfo = data
      }
    );
  }

  AddBook(){   
    this.router.navigate([0] , { relativeTo: this.route });
    this.bookService.getAllBookList().subscribe(
      data => {
        this.bookInfo = data
      }
    );
  }

}
