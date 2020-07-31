'use strict';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {StoreFacadeAbstract} from '../../../libCommon/store.facade';
import {BooksActions} from './books.actions';
import {BooksSelectors} from './books.selectors';
import {BookModel} from './book.model';

@Injectable()
export class BooksStore extends StoreFacadeAbstract<BookModel> {

  public actions: BooksActions;
  protected selectors: BooksSelectors;

  public loadBooks(): void {
    this.dispatch(this.actions.loadBooks());
  }

  public updateBooks(title: string): void {
    this.dispatch(this.actions.updateBooks({title}));
  }

  public getBooks(): Observable<BookModel> {
    return this.select(this.selectors.getBooks);
  }

}
