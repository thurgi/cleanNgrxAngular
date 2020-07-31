import {Component, OnInit} from '@angular/core';
import {PractitionerStore} from './stores/practitioner/practitioner.store';
import { Observable, of } from 'rxjs';
import {BooksStore} from './stores/books/books.store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cleanNgrxAngular';
  name: string;
  name$: Observable<string> = of('inconnu');
  books$ = of({title: 'ça marche pas'});

  constructor(public practitionerStore: PractitionerStore, public booksStore: BooksStore) {
    this.name$ = this.practitionerStore.getPractitionerName();
    this.books$ = this.booksStore.getBooks();
  }

  public ngOnInit(): void {
    this.practitionerStore.loadPractitioners();
    this.booksStore.loadBooks();
  }

  changePractitioner(): void {
    this.practitionerStore.updatePractitionerName(this.name);
  }
}