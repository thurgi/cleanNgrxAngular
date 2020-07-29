import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap} from 'rxjs/operators';

import * as PractitionerActions from './practitioner.actions';
import {PractitionerService} from '../../services/practitioner.service';
import {PractitionerHttpModel} from '../../../libHttp/models/practitionerHttpModel';
import {PractitionerModel} from '../../models/practitionerModel';

export class PractitionerEffects {
  constructor(private actions$: Actions, private practiceService: PractitionerService) {}

  loadPractitioners$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PractitionerActions.loadPractitioners),
      switchMap(action => {
        return this.practiceService.get(action.id).pipe(
          map<PractitionerHttpModel, PractitionerModel>(this.practiceHttpToPractice)
        );
      })
    );
  });

  loadPractitioner$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PractitionerActions.loadPractitioners),
      switchMap(action => this.practiceService.getAll().pipe(
        map<PractitionerHttpModel[], PractitionerModel[]>(practices =>
          practices.map(this.practiceHttpToPractice)
        )
      ))
    );
  });

  private practiceHttpToPractice (practice: PractitionerHttpModel): PractitionerModel {
    return {
      name: practice.id,
      description: practice.description
    };
  }
}
