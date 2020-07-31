import {StoreActionAbstract} from './store.action';
import {Store} from '@ngrx/store';
import {OverloadedReturnType} from './overloaded.return.type';
import {StoreSelectorsAbstract} from './store.selectors';

export abstract class StoreFacadeAbstract<T> {

  protected selectors: StoreSelectorsAbstract<T>;
  public actions: StoreActionAbstract;

  constructor(
    private store: Store<T>,
    selectors: StoreSelectorsAbstract<T>,
    actions: StoreActionAbstract
  ) {
    this.actions = actions as typeof actions;
    this.selectors = selectors;
  }

  /**
   * Used to dispatch actions
   */
  protected dispatch(action: any): void {
    this.store.dispatch(action);
  }

  /**
   * Used to select
   */
  protected select<S, Props, K>(mapFn: (state: S, props: Props) => K, props?: Props): OverloadedReturnType<typeof Store.prototype.select> {
    // @ts-ignore
    return this.store.select(mapFn);
  }

}