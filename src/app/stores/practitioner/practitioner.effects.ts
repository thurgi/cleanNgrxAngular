import { Actions, ofType } from '@ngrx/effects';
import { map, switchMap} from 'rxjs/operators';

import {PractitionerActions} from './practitioner.actions';
import {PractitionerService} from '../../services/practitioner.service';
import {PractitionerHttpModel} from '../../../libHttp/models/practitionerHttpModel';
import {PractitionerModel} from '../../models/practitioner.model';
import {StoreEffectInterface} from '../../../libCommon/store.effect.interface';
import {createEffect} from '../../../libCommon/store.factory';

export class PractitionerEffects implements StoreEffectInterface{
  name = PractitionerEffects.name;
  constructor(
    private actions$: Actions,
    private actionPractitioner: PractitionerActions,
    private practiceService: PractitionerService
  ) {}

  loadPractitioner$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actionPractitioner.loadPractitioner),
      switchMap(action => this.practiceService.get(action.id).pipe(
        map<PractitionerHttpModel, PractitionerModel>(practice =>
          this.practiceHttpToPractice(practice)
        )
      ))
    );
  });

  private practiceHttpToPractice(practice: PractitionerHttpModel): PractitionerModel {
    return {
      name: practice.id,
      description: practice.description
    };
  }
}
