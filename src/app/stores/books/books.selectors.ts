import {createSelector} from '@ngrx/store';
import {StoreSelectorsAbstract} from '../../../libCommon/store.selectors';
import {BookModel} from './book.model';


export class BooksSelectors extends StoreSelectorsAbstract<BookModel> {

  getBooks = createSelector(
    this.featureSelector,
    (state): BookModel => state
  );

}
