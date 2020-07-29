import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {PractitionerService} from '../../services/practitioner.service';
import {loadPractitioners, reset} from './practitioner.actions';
import {StoreInterface} from '../../../libCommon/storeInterface';
import {ActionReducer} from '@ngrx/store/src/models';
import {practitionerReducer} from './practitioner.reducer';
import {PractitionerModel} from '../../models/practitioner.model';
import {selectPractitionerName, getPractitioner} from './practitioner.selectors';

@Injectable()
export class PractitionerStore implements StoreInterface{

  constructor(private actions$: Actions, private practiceService: PractitionerService) {
  }

  public loadPractitioners(): void {
    loadPractitioners();
  }

  public resetPractitioners(): void {
    reset();
  }

  public getPractitioner(): PractitionerModel{
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
