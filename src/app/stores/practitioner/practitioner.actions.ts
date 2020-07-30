import { props } from '@ngrx/store';
import {HealthcareModel} from '../../models/healthcare.model';
import {StoreActionAbstract} from '../../../libCommon/store.action.interface';

export class PractitionerActions extends StoreActionAbstract{
  disassociateHealthcare = this.createAction('disassociateHealthcare');
  associateHealthcare = this.createAction(
    'associateHealthcare',
    props<{ healthcare: HealthcareModel }>()
  );
  reset = this.createAction('reset');
  loadPractitioner = this.createAction('loadPractitioner');
}
