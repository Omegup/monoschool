interface Key_SubKeysHKT<T, L extends string & keyof T>
  extends HKT<string & keyof T[L], string> {
  readonly out: `${L}_${I<string & keyof T[L], this>}`;
}
type ReversedSubKeys<
  T,
  K extends string & keyof T = string & keyof T
> = K extends unknown ? `${string & keyof T[K]}_${K}` : never;

type IndexedFlattenEntries<T, K extends string & keyof T = string & keyof T> = {
  readonly [k in ReversedSubKeys<
    T,
    K
  >]: k extends `${string}_${infer ks extends K}`
    ? k extends `${infer k extends string & keyof T[ks]}_${ks}`
      ? readonly [App<Key_SubKeysHKT<T, ks>, k>, T[ks][k]]
      : never
    : never;
};

export type Flatten<T> = {
  [k in ReversedSubKeys<T> as IndexedFlattenEntries<T>[k][0]]: IndexedFlattenEntries<T>[k][1];
};

export const flatObject = <Q>(state: Q): Flatten<Q> => {
  type K = string & keyof Q;
  interface H<L extends K> extends HKT<string & keyof Q[L], string> {
    readonly out: `${L}_${I<string & keyof Q[L], this>}`;
  }
  type Reversed = ReversedSubKeys<Q>;
  type Indexed = IndexedFlattenEntries<Q>;

  const mapper = <L extends K>([k, v]: readonly [L, Q[L]]): Entry<
    Q[L],
    H<L>
  >[] => {
    type T = Q[L];
    type K = string & keyof T;
    interface F extends HKT<K> {
      readonly out: readonly [I<K, this>, T[I<K, this>]];
    }
    interface G extends HKT<K> {
      readonly out: readonly [`${L}_${I<K, this>}`, T[I<K, this>]];
    }
    return Object.entries(v).map<K, F, G>(
      <k extends K>([c, d]: App<F, k>): App<G, k> => [`${k}_${c}`, d]
    );
  };
  interface F extends HKT<K> {
    readonly out: readonly [I<K, this>, Q[I<K, this>]];
  }
  interface G extends HKT<K> {
    readonly out: Entry<Q[I<K, this>], Key_SubKeysHKT<Q, I<K, this>>>;
  }
  const entries = Object.entries(state).flatMap<K, F, G>(
    mapper
  ) as {} as readonly Indexed[ReversedSubKeys<Q>][];
  return Object.fromEntries<Reversed, Indexed>(entries);
};
