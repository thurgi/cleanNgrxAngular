import {Actions, createEffect as ce, ofType} from '@ngrx/effects';
import {OverloadedArguments} from './overloaded.params.type';
import {OverloadedReturnType} from './overloaded.return.type';
import {StoreActionInterface} from './store.action.interface';

export type createEffectParamsType = OverloadedArguments<typeof ce>;
export type createEffectReturnType = OverloadedReturnType<typeof ce>;

export type OfTypeEffectParamsType = OverloadedArguments<typeof ofType>;


export interface StoreEffectInterface {
  name: string;
}

export abstract class StoreEffectAbstract implements StoreEffectInterface {
  name;
  protected constructor(private actions$: Actions, private storeActionInterface: StoreActionInterface) {
  }

  protected createEffect<T, service extends T>(type: OfTypeEffectParamsType, ...args: createEffectParamsType): createEffectReturnType {
    // @ts-ignore
    return ce(...args);
  }
}
