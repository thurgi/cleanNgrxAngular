'use strict';

import {Injectable} from '@angular/core';
import {PractitionerActions} from './practitioner.actions';
import {StoreInterface} from '../../../libCommon/store.interface';
import {ActionReducer} from '@ngrx/store/src/models';
import {practitionerReducer} from './practitioner.reducer';
import {selectPractitioner, selectPractitionerName} from './practitioner.selectors';
import {createReducer} from '../../../libCommon/store.factory';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {StoreEffectInterface} from '../../../libCommon/store.effect.interface';
import {PractitionerEffects} from './practitioner.effects';
import {Actions} from '@ngrx/effects';
import {PractitionerService} from '../../services/practitioner.service';
import {PractitionerModel} from '../../models/practitioner.model';

@Injectable()
export class PractitionerStore implements StoreInterface {

  public action;
  public static readonly effects = PractitionerEffects;
  public static readonly reducer = practitionerReducer;

  constructor(moduleName: string, private store: Store, private actions$: Actions, private practiceService: PractitionerService) {
    this.action = new PractitionerActions(moduleName, PractitionerStore.name);
    this.effects = new PractitionerEffects(actions$, this.action, practiceService);
  }

  public loadPractitioners(): void {
    this.action.loadPractitioners();
  }

  public resetPractitioners(): void {
    this.action.reset();
  }

  public getPractitioner(): Observable<PractitionerModel>{
    return this.store.select(selectPractitioner);
  }

  public getPractitionerName(): Observable<string> {
    return this.store.select(selectPractitionerName);
  }

  getEffect(): StoreEffectInterface[] {
    return this.effects;
  }

  getReducer(): ActionReducer<any> {
    return createReducer(this.action, this.reducer);
  }

}
