import { props } from '@ngrx/store';
import {HealthcareModel} from '../../models/healthcare.model';
import {StoreActionAbstract} from '../../../libCommon/store.action';
import {Injectable} from '@angular/core';
import {PractitionerModel} from '../../models/practitioner.model';

@Injectable()
export class PractitionerActions extends StoreActionAbstract {
  public readonly disassociateHealthcare = this.createAction('disassociateHealthcare');
  public readonly associateHealthcare = this.createAction(
    'associateHealthcare',
    props<{ healthcare: HealthcareModel }>()
  );
  public readonly reset = this.createAction('reset');
  public readonly loadPractitioners = this.createAction('loadPractitioner', props<{id: string}>());
  public readonly loadPractitionersSuccess = this.createAction('loadPractitionersSuccess', props<{data: PractitionerModel[] }>());
  public readonly updatePractitionerName = this.createAction('updatePractitionerName', props<{name: string}>());
}
