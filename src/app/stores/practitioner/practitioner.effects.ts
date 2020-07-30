import { Actions, ofType } from '@ngrx/effects';
import { map, switchMap} from 'rxjs/operators';

import {PractitionerActions} from './practitioner.actions';
import {PractitionerService} from '../../services/practitioner.service';
import {PractitionerHttpModel} from '../../../libHttp/models/practitionerHttpModel';
import {PractitionerModel} from '../../models/practitioner.model';
import {StoreEffectInterface} from '../../../libCommon/store.effect.interface';
import {createEffect} from '../../../libCommon/store.factory';
import {Injectable} from '@angular/core';

@Injectable()
export class PractitionerEffects implements StoreEffectInterface{
  constructor(
    private actions$: Actions,
    private practiceService: PractitionerService,
    private actionPractitioner: PractitionerActions
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
