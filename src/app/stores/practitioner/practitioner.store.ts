import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {PractitionerService} from '../../services/practitioner.service';
import {loadPractitioners, resetPractitioners} from './practitioner.actions';
import {StoreAbstract} from '../../../libCommon/store.abstract';
import {ActionReducer} from '@ngrx/store/src/models';
import {practitionerReducer} from './practitioner.reducer';
import {PractitionerModel} from '../../models/practitionerModel';
import {selectPractitionerEntities, selectPractitionerIds, selectPractitionerState} from './practitioner.selectors';

@Injectable()
export class PractitionerStore implements StoreAbstract{

  constructor(private actions$: Actions, private practiceService: PractitionerService) {
  }

  public loadPractitioners(): void {
    loadPractitioners();
  }

  public resetPractitioners(): void {
    resetPractitioners();
  }

  public getPractitioner(id: string): PractitionerModel {
    selectPractitionerEntities(selectPractitionerState);
  }

  getEffect(): any[] {
    return [];
  }

  getReducer(): ActionReducer<any> {
    return practitionerReducer;
  }

}
