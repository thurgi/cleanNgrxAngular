import {Actions, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {PractitionerService} from '../../services/practitioner.service';
import {PractitionerHttpModel} from '../../../libHttp/models/practitionerHttpModel';
import {PractitionerModel} from '../../models/practitioner.model';
import {createEffect} from '../../../libCommon/store.factory';
import {Injectable} from '@angular/core';
import {BooksStore} from './books.store';
import {StoreEffectAbstract} from '../../../libCommon/store.effect';
import {BookModel} from './book.model';

@Injectable()
export class BooksEffects extends StoreEffectAbstract {
  name = BooksEffects.name;
  constructor(
    actions$: Actions,
    protected store: BooksStore,
    private practiceService: PractitionerService
  ) {
    super(actions$, store);
  }

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.store.actions.loadBooks),
      map(action => ({ title: 'la vie des plop'})),
      map((data: BookModel) => this.store.actions.loadBooksSucces({ data }))
    );
  });

  private practiceHttpToPractice(practice: PractitionerHttpModel): PractitionerModel {
    return {
      name: practice.id,
      description: practice.description
    };
  }
}
