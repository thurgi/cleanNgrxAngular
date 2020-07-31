import {PractitionerAssigment} from '../../models/practitioner.assignement.model';
import {BooksActions} from './books.actions';
import {StoreReducerAbstract} from '../../../libCommon/store.reducer';
import {BookModel} from './book.model';


export class BooksReducer extends StoreReducerAbstract<BookModel> {
  protected actions: BooksActions;
  public initialState: PractitionerAssigment = {
    practitioner: null,
    healthcare: null,
    id: null
  };
  actionReducers = [
    this.on(this.actions.updateBooks, (state, {title}) => {
      return { ...state, title};
    }),
    this.on(this.actions.loadBooksSucces, (state, {data}) => {
      return data;
    })
  ];
}