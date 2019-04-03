import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'port20-client-list',
  template: `
    <div uk-height-viewport="offset-top: true; offset-bottom: 110px"
      class="uk-container uk-container-large uk-flex uk-flex-middle">
      <div uk-grid
        class="uk-grid-small uk-grid-match uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l">
        <div *ngFor="let client of clients | async; trackBy:trackBy">
          <port20-client-card
            [client]="client"
            class="uk-card uk-card-default uk-card-body uk-text-center uk-light client-card"
            [class.roomberry-gradient-hover]="client.id === 1"
            [class.trauma-club-gradient-hover]="client.id === 2"
            [class.sc-gradient-hover]="client.id === 3"
            [class.ns-gradient-hover]="client.id === 4"
            [class.ws-gradient-hover]="client.id === 5"
          ></port20-client-card>
        </div>
        <div>
          <port20-client-action-card
            class="uk-card uk-card-default uk-card-body uk-text-center uk-light client-card action-card"
          ></port20-client-action-card>
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientListComponent implements OnInit {
  clients: Observable<Client[]> = of([
    {
      id: 1,
      name: 'Crm.roomberry.ru',
      subtitle: 'CRM для застройщиков'
    },
    {
      id: 2,
      name: 'Trauma.club',
      subtitle: 'Клуб врачей-травматологов'
    },
    {
      id: 3,
      name: 'ScienceConnect.org',
      subtitle: 'Онлайн видео чат'
    },
    {
      id: 4,
      name: 'Nagser.ru',
      subtitle: 'Моё новое портфолио уже здесь'
    },
    {
      id: 5,
      name: 'Wine stats',
      subtitle: 'Статистика винных баров Москвы'
    }
  ]);
  constructor() { }

  ngOnInit() {
  }

  trackBy(i, x: Client) {
    return x.id;
  }

}
