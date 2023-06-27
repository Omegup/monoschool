/// <reference path="./hkt.d.ts" />
/// <reference path="./common-types.d.ts" />


export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
type Cast<X, Y> = X extends Y ? X : Y
type FromEntries<T> = T extends [infer Key, any][]
  ? { [K in Cast<Key, string>]: Extract<ArrayElement<T>, [K, any]>[1]}
  : { [key in string]: any }

export type FromEntriesWithReadOnly<T> = FromEntries<DeepWriteable<T>>


declare global {
   interface ObjectConstructor {
     fromEntries<T>(obj: T): FromEntriesWithReadOnly<T>
  }
}

type Entry<T, F extends HKT<string & keyof T, string> = IdHKT<string & keyof T>> = {
  readonly [k in string & keyof T]: readonly [App<F, k>, T[k]];
}[string & keyof T];
interface ObjectConstructor {
  entries<T, _ = 0>(object?: T): Entry<T>[];
  fromEntries<K extends string, U extends Record<K, readonly [string, unknown]>>(
    entries: readonly U[K][]
  ): { [k in K as U[k][0]]: U[k][1] };
  fromEntries<T, _ = 0>(entries: Entry<T>[]): T;
}
interface Array<T> {
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  map<T, U extends Record<keyof T, unknown>>(
    this: Entry<T>[],
    callbackfn: <k extends keyof T>(
      kv: readonly [k, T[k]],
      index: number,
      array: Entry<T>[]
    ) => readonly [k, U[k]],
    thisArg?: any
  ): Entry<U>[];
  flatMap<U, This = undefined> (
    callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,
    thisArg?: This
  ): U[]
  flatMap<Dom extends keyof any, F extends HKT<Dom>, G extends HKT<Dom>>(
    this: readonly { readonly [k in Dom]: App<F, k> }[Dom][],
    callbackfn: <X extends Dom>(
      v: App<F, X>,
      index: number,
    ) => App<G, X>[],
    thisArg?: any
  ): { readonly [k in Dom]: App<G, k> }[Dom][];
  map<Dom extends keyof any, F extends HKT<Dom>, G extends HKT<Dom>>(
    this: readonly { readonly [k in Dom]: App<F, k> }[Dom][],
    callback: <X extends Dom>(v: App<F, X>) => App<G, X>
  ): { readonly [k in Dom]: App<G, k> }[Dom][];
}
