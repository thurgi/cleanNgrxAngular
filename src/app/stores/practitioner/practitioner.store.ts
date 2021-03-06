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

type selectReturnType<T> = T extends (...args: any[]) => infer R ? Observable<R> : never;
type selectParamsType<T> = T extends (...args: infer P) => any ? P : never;

@Injectable()
export class PractitionerStore implements StoreInterface {

  public action;
  public effects: StoreEffectInterface;
  public reducer = practitionerReducer;

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

  public getPractitioner(): selectReturnType<typeof selectPractitioner> {
    return this.store.select(selectPractitioner);
  }

  public getPractitionerName(...args: selectParamsType<typeof selectPractitionerName>): selectReturnType<typeof selectPractitionerName> {
    return this.store.select(selectPractitionerName, ...args);
  }

  getEffect(): any[] {
    return [];
  }

  getReducer(): ActionReducer<any> {
    return createReducer(this.action, this.reducer);
  }

}
