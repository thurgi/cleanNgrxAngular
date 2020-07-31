'use strict';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PractitionerModel} from '../../models/practitioner.model';
import {PractitionerAssigment} from '../../models/practitioner.assignement.model';
import {StoreFacadeAbstract} from '../../../libCommon/store.facade';
import {PractitionerActions} from './practitioner.actions';
import {PractitionerSelectors} from './practitioner.selectors';

@Injectable()
export class PractitionerStore extends StoreFacadeAbstract<PractitionerAssigment> {

  //TODO: essayer de se passer du besoin de typage manuel
  public actions: PractitionerActions;
  protected selectors: PractitionerSelectors;

  public loadPractitioners(): void {
    this.dispatch(this.actions.loadPractitioners({id: 'test'}));
  }

  public resetPractitioners(): void {
    this.dispatch(this.actions.reset());
  }

  public updatePractitionerName(name: string): void {
    this.dispatch(this.actions.updatePractitionerName({name}));
  }

  public getPractitioner(): Observable<PractitionerModel>{
    return this.select(this.selectors.selectPractitioner);
  }

  public getPractitionerName(): Observable<string> {
    console.log('selectors', this.selectors);
    return this.select(this.selectors.selectPractitionerName);
  }

}
