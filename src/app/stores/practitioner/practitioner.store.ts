'use strict';

import {Injectable} from '@angular/core';
import {PractitionerActions} from './practitioner.actions';
import {practitionerReducer} from './practitioner.reducer';
import {selectPractitioner, selectPractitionerName} from './practitioner.selectors';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Actions} from '@ngrx/effects';
import {PractitionerService} from '../../services/practitioner.service';
import {PractitionerModel} from '../../models/practitioner.model';

@Injectable()
export class PractitionerStore {

  public static actions = PractitionerActions;
  public static readonly reducer = practitionerReducer;

  public actions: PractitionerActions;

  constructor(moduleName: string, private store: Store, private actions$: Actions, private practiceService: PractitionerService, actions: PractitionerActions) {
    this.actions = actions;
  }

  public loadPractitioners(): void {
    this.store.dispatch(this.actions.loadPractitioners());
  }

  public resetPractitioners(): void {
    this.actions.reset();
  }

  public updatePractitionerName(name: string): void {
    this.store.dispatch(this.actions.updatePractitionerName({name}));
  }

  public getPractitioner(): Observable<PractitionerModel>{
    return this.store.select(selectPractitioner);
  }

  public getPractitionerName(): Observable<string> {
    return this.store.select(selectPractitionerName);
  }

}
