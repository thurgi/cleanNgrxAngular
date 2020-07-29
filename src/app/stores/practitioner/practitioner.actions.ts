import { createAction, props } from '@ngrx/store';
import {HealthcareModel} from '../../models/healthcare.model';
import {StoreActionAbstract} from '../../../libCommon/store.action.interface';


export class PractitionerActions extends StoreActionAbstract{
  actions: { [p: string]: string } = {
    loadPractitioner : 'loadPractitioner',
    reset : 'reset',

    associateHealthcare : 'associateHealthcare',
    disassociateHealthcare : 'disassociateHealthcare',
  };

  disassociateHealthcare = this.createAction(this.actions.disassociateHealthcare);
  associateHealthcare = createAction(
    this.actions.associateHealthcare,
    props<{ healthcare: HealthcareModel }>()
  );
  reset = createAction(this.actions.reset);
  loadPractitioner = createAction(this.actions.loadPractitioner);
}
