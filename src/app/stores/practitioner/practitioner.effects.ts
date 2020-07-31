import {Actions, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {PractitionerService} from '../../services/practitioner.service';
import {PractitionerHttpModel} from '../../../libHttp/models/practitionerHttpModel';
import {PractitionerModel} from '../../models/practitioner.model';
import {StoreEffectInterface} from '../../../libCommon/store.effect.interface';
import {createEffect} from '../../../libCommon/store.factory';
import {Injectable} from '@angular/core';
import {PractitionerStore} from './practitioner.store';

@Injectable()
export class PractitionerEffects implements StoreEffectInterface{
  name = PractitionerEffects.name;
  constructor(
    private actions$: Actions,
    private store: PractitionerStore,
    private practiceService: PractitionerService
  ) {}

  loadPractitioners$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.store.actions.loadPractitioners),
      switchMap(action => this.practiceService.getAll()),
      map((data) => this.store.actions.loadPractitionersSuccess(data.map(this.practiceHttpToPractice)))
    );
  });

  private practiceHttpToPractice(practice: PractitionerHttpModel): PractitionerModel {
    return {
      name: practice.id,
      description: practice.description
    };
  }
}
