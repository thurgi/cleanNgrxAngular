import {props} from '@ngrx/store';
import {StoreActionAbstract} from '../../../libCommon/store.action';
import {Injectable} from '@angular/core';
import {BookModel} from './book.model';

@Injectable()
export class BooksActions extends StoreActionAbstract {
  public readonly loadBooks = this.createAction('loadBooks');
  public readonly updateBooks = this.createAction('updateBooks', props<{title: string}>());
  public readonly loadBooksSucces = this.createAction('loadBooksSucces', props<{data: BookModel}>());


}
