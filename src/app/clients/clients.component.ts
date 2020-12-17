import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList = [
    {
      clientId: 10,
      firstName: 'henry',
      lastName :'xing'
    },
    {
      clientId: 11,
      firstName: 'louis',
      lastName :'kang'
    },
    {
      clientId: 12,
      firstName: 'marcus',
      lastName :'wu'
    },
    {
      clientId: 13,
      firstName: 'ken',
      lastName :'gay'
    },
    {
      clientId: 14,
      firstName: 'may',
      lastName :'xi'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
