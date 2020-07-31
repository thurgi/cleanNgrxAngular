import {createFeatureSelector, DefaultProjectorFn} from '@ngrx/store';
import {MemoizedSelector} from '@ngrx/store/src/selector';

export abstract class StoreSelectorsAbstract<S> {

  protected featureSelector: MemoizedSelector<object, S, DefaultProjectorFn<S>>;

  constructor(name: string) {
    this.featureSelector = createFeatureSelector(name);
  }

}
