import { props } from '@ngrx/store';
import {HealthcareModel} from '../../models/healthcare.model';
import {StoreActionAbstract} from '../../../libCommon/store.action.interface';
import {Injectable} from '@angular/core';
import {PractitionerModel} from '../../models/practitioner.model';

@Injectable()
export class PractitionerActions extends StoreActionAbstract{
  disassociateHealthcare = this.createAction('disassociateHealthcare');
  associateHealthcare = this.createAction(
    'associateHealthcare',
    props<{ healthcare: HealthcareModel }>()
  );
  reset = this.createAction('reset');
  loadPractitioners = this.createAction('loadPractitioner', props<{id: string}>());
  loadPractitionersSuccess = this.createAction('loadPractitionersSuccess', props<{data: PractitionerModel[] }>());
  updatePractitionerName = this.createAction('updatePractitionerName', props<{name: string}>());
}
