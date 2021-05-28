import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { Ticket } from 'src/interfaces/ticket.interfaces';
import { TicketService } from 'src/services/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tickets:Ticket[]=[];

  constructor(private services:TicketService) { }

  ngOnInit(): void {
    this.getData()
  }

  private getData():void{
    this.services
    .listTickts()
    .pipe(
      take(1)
    ).subscribe((res:any) => {
      console.log('Res =>',res)
      this.tickets = res;
      const {ticke} = res;
      this.tickets = [...this.tickets, ...ticke];

    });



}
}

