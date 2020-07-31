import {createSelector} from '@ngrx/store';
import {PractitionerAssigment} from '../../models/practitioner.assignement.model';
import {PractitionerModel} from '../../models/practitioner.model';
import {StoreSelectorsAbstract} from '../../../libCommon/store.selectors';


export class PractitionerSelectors extends StoreSelectorsAbstract<PractitionerAssigment> {

  getPractitioner = createSelector(
    this.featureSelector,
    (state): PractitionerModel => state.practitioner
  );

  selectPractitioner  = createSelector(
    this.getPractitioner,
    (state) => state
  );

  selectPractitionerName = createSelector(
    this.getPractitioner,
    (state) => state?.name
  );

}
