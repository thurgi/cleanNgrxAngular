import {Component, OnInit} from '@angular/core';
import {PractitionerStore} from './stores/practitioner/practitioner.store';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cleanNgrxAngular';
  name: string;
  name$: Observable<string> = of('inconnu');

  constructor(public practitionerStore: PractitionerStore) {
    this.name$ = this.practitionerStore.getPractitionerName();
  }

  public ngOnInit(): void {
    this.practitionerStore.loadPractitioners();
  }

  changePractitioner(): void {
    this.practitionerStore.updatePractitionerName(this.name);
  }
}