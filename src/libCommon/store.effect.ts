import {Actions, createEffect as ce, ofType} from '@ngrx/effects';
import {OverloadedArguments} from './overloaded.params.type';
import {OverloadedReturnType} from './overloaded.return.type';
import {Type} from '@angular/core';
import {StoreFacadeAbstract} from './store.facade';

export type createEffectParamsType = OverloadedArguments<typeof ce>;
export type createEffectReturnType = OverloadedReturnType<typeof ce>;
export type OfTypeEffectParamsType = OverloadedArguments<typeof ofType>;


export abstract class StoreEffectAbstract {

  protected constructor(
    protected actions$: Actions,
    protected store: StoreFacadeAbstract<any>
  ) {
  }

  protected createEffect<T, service extends T>(type: OfTypeEffectParamsType, ...args: createEffectParamsType): createEffectReturnType {
    // @ts-ignore
    return ce(...args);
  }
}
