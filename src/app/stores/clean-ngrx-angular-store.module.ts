import { NgModule } from '@angular/core';
import {PractitionerStore} from './practitioner/practitioner.store';
import {StoreFactoryModule} from '../../libCommon/store-factory.module';
import {PractitionerService} from '../services/practitioner.service';
import {PractitionerEffects} from './practitioner/practitioner.effects';
import {PractitionerActions} from './practitioner/practitioner.actions';
import {PractitionerSelectors} from './practitioner/practitioner.selectors';
import {PractitionerReducer} from './practitioner/practitioner.reducer';
import {BooksStore} from './books/books.store';
import {BooksActions} from './books/books.actions';
import {BooksSelectors} from './books/books.selectors';
import {BooksReducer} from './books/books.reducer';
import {BooksEffects} from './books/books.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreFactoryModule.getFacade(
      CleanNgrxAngularStoreModule.name,
      PractitionerStore,
      PractitionerActions,
      PractitionerSelectors,
      PractitionerReducer,
      [PractitionerEffects]
    ),
    StoreFactoryModule.getFacade(
      'plop',
      BooksStore,
      BooksActions,
      BooksSelectors,
      BooksReducer,
      [BooksEffects]
    )
  ],
  providers: [
    PractitionerService
  ]
})
export class CleanNgrxAngularStoreModule {
}
