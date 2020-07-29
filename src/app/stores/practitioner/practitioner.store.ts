import {Injectable} from '@angular/core';
import {PractitionerActions} from './practitioner.actions';
import {StoreInterface} from '../../../libCommon/store.interface';
import {ActionReducer} from '@ngrx/store/src/models';
import {practitionerReducer} from './practitioner.reducer';
import {PractitionerModel} from '../../models/practitioner.model';
import {selectPractitionerName, getPractitioner} from './practitioner.selectors';

@Injectable()
export class PractitionerStore implements StoreInterface {

  public action;

  constructor(moduleName: string) {
    this.action = new PractitionerActions(moduleName, PractitionerStore.name);
  }

  public loadPractitioners(): void {
    this.action.loadPractitioners();
  }

  public resetPractitioners(): void {
    this.action.reset();
  }

  public getPractitioner(): PractitionerModel {
    return getPractitioner();
  }

  public getPractitionerName(): string {
    return selectPractitionerName();
  }

  getEffect(): any[] {
    return [];
  }

  getReducer(): ActionReducer<any> {
    return practitionerReducer;
  }

}
