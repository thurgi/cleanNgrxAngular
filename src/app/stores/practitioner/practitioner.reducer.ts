import {createReducer, on} from '@ngrx/store';
import * as PractitionerActions from './practitioner.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {practitionerAssigment} from '../../models/practitioner.assignement.model';

export const NGRX_FEATURE_KEY_PREFIX = 'extension-directory-';
export const PRACTITIONER_FEATURE_KEY = NGRX_FEATURE_KEY_PREFIX + 'practitioner';

export interface State extends EntityState<practitionerAssigment> {
  selectedPractitionerId: string | null;
}

export const adapter: EntityAdapter<practitionerAssigment> = createEntityAdapter<practitionerAssigment>({
  selectId: (book: practitionerAssigment) => book.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedPractitionerId: null
});

export const practitionerReducer = createReducer(
  initialState,

  on(PractitionerActions.resetPractitioners, state => adapter.getInitialState()),
  on(PractitionerActions.loadPractitioners, PractitionerActions.loadAvailablePractitioners, state => state),
  on(PractitionerActions.loadPractitionersSuccess, (state, {entities}) => adapter.setAll(entities, state)),
  on(PractitionerActions.loadAvailablePractitionersSuccess, (state, {entities}) => {
    const nonAlreadyAssociated = entities.filter(
      entity =>
        // @ts-ignore
        !state.ids.includes(entity.id)
    );
    return adapter.upsertMany(nonAlreadyAssociated, state);
  }),
  on(PractitionerActions.loadPractitionersFailure, PractitionerActions.loadAvailablePractitionersFailure, (state, action) => state),
  on(PractitionerActions.associatePractitioners, (state, {payload}) =>
    adapter.updateMany(
      payload.map(practitioner => {
        return {id: practitioner.id, changes: {associated: true}};
      }),
      state
    )
  ),
  on(PractitionerActions.disassociatePractitioners, (state, {payload}) =>
    adapter.updateMany(
      payload.map(practitioner => {
        return {id: practitioner.id, changes: {associated: false}};
      }),
      state
    )
  ),
  on(PractitionerActions.disassociatePractitioner, (state, {payload}) =>
    adapter.updateOne({id: payload.id, changes: {associated: false}}, state)
  )
);

export const getSelectedPractitionerId = (state: State) => state.selectedPractitionerId;

