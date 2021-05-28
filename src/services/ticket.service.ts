import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient ) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplicacion/Json"
  });




  listTickts(): Observable<TicketService[]> {
    const url_api = "https://jobcode.herokuapp.com/getTickets";

    return this.http.get<TicketService[]>(url_api);
  }
}
