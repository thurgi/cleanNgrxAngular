'use strict';

import {Injectable} from '@angular/core';
import {PractitionerActions} from './practitioner.actions';
import {StoreInterface} from '../../../libCommon/store.interface';
import {ActionReducer} from '@ngrx/store/src/models';
import {practitionerReducer} from './practitioner.reducer';
import {PractitionerModel} from '../../models/practitioner.model';
import {selectPractitionerName, getPractitioner} from './practitioner.selectors';
import {createReducer} from '../../../libCommon/store.factory';
import { Store } from '@ngrx/store';

@Injectable()
export class PractitionerStore implements StoreInterface {

  public action;
  public reducer = practitionerReducer;

  constructor(moduleName: string, private store: Store) {
    this.action = new PractitionerActions(moduleName, PractitionerStore.name);
  }

  public loadPractitioners(): void {
    this.action.loadPractitioners();
  }

  public resetPractitioners(): void {
    this.action.reset();
  }

  public getPractitioner(): PractitionerModel {
    return getPractitioner(this.store);
  }

  public getPractitionerName(): string {
    return selectPractitionerName();
  }

  getEffect(): any[] {
    return [];
  }

  getReducer(): ActionReducer<any> {
    return createReducer(this.action, this.reducer);
  }

}
