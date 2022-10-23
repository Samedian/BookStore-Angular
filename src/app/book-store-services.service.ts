import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { bookInformation } from './Book-Store Model/bookInformation';
import { Options } from 'selenium-webdriver';



@Injectable({
  providedIn: 'root'
})
export class BookStoreServicesService {

  constructor(private http : HttpClient) { }

  private baseUrl = "https://localhost:44349/api/BookStore";

  getAllBookList() : Observable<any> {
    return this.http.get(this.baseUrl);
    }
  
  getBook(id : number) : Observable<any> {
    return this.http.get(this.baseUrl + "?id = " + id);
    }

  deleteBook(id : number) : Observable<any> {
    return this.http.delete(this.baseUrl + "?id = " + id);
  }

  postBook(bookInfo : bookInformation) {
    // const headers = { 'content-type': 'application/json'}  
    // const body=JSON.stringify(bookInfo);
     return this.http.post<void>(this.baseUrl, bookInfo);
    
  }
}
