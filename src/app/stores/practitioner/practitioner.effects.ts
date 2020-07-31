import {Actions, ofType} from '@ngrx/effects';
import {map, switchMap, tap} from 'rxjs/operators';
import {PractitionerService} from '../../services/practitioner.service';
import {PractitionerHttpModel} from '../../../libHttp/models/practitionerHttpModel';
import {PractitionerModel} from '../../models/practitioner.model';
import {createEffect} from '../../../libCommon/store.factory';
import {Injectable} from '@angular/core';
import {PractitionerStore} from './practitioner.store';
import {StoreEffectAbstract} from '../../../libCommon/store.effect';

@Injectable()
export class PractitionerEffects extends StoreEffectAbstract {
  name = PractitionerEffects.name;
  constructor(
    actions$: Actions,
    protected store: PractitionerStore,
    private practiceService: PractitionerService
  ) {
    super(actions$, store);
  }

  loadPractitioners$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.store.actions.loadPractitioners),
      tap(() => { console.log('effect called'); }),
      switchMap(action => this.practiceService.getAll()),
      map((data) => this.store.actions.loadPractitionersSuccess({ data: data.map(this.practiceHttpToPractice)}))
    );
  });

  private practiceHttpToPractice(practice: PractitionerHttpModel): PractitionerModel {
    return {
      name: practice.id,
      description: practice.description
    };
  }
}
