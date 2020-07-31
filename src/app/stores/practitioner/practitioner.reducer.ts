import {PractitionerAssigment} from '../../models/practitioner.assignement.model';
import {PractitionerActions} from './practitioner.actions';
import {StoreReducerAbstract} from '../../../libCommon/store.reducer';


export class PractitionerReducer extends StoreReducerAbstract<PractitionerAssigment> {
  protected actions: PractitionerActions;
  public initialState: PractitionerAssigment = {
    practitioner: null,
    healthcare: null,
    id: null
  };
  actionReducers = [
    this.on(this.actions.loadPractitioners, (state, props) => {
      return state;
    }),
    this.on(this.actions.loadPractitionersSuccess, (state, {data}) => {
      console.log('data', data);
      return { ...state, practitioner: data[0]};
    }),
    this.on(this.actions.updatePractitionerName, (state, {name}) => {
      return { ...state, practitioner: { ...state.practitioner, name}};
    })
  ];
}