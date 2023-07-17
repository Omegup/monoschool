export const flatObject = <Q>(state: Q) => {
  type K = string & keyof Q;
  interface H<L extends K> extends HKT<string & keyof Q[L], string> {
    readonly out: `${L}_${I<string & keyof Q[L], this>}`;
  }
  type KK<ks extends K = K> = ks extends K
    ? `${string & keyof Q[ks]}_${ks}`
    : never;
  type UU = {
    readonly [k in KK]: k extends `${string}_${infer ks extends K}`
      ? k extends `${infer k extends string & keyof Q[ks]}_${ks}`
        ? readonly [App<H<ks>, k>, Q[ks][k]]
        : never
      : never;
  };

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
    readonly out: Entry<Q[I<K, this>], H<I<K, this>>>;
  }
  const entries = Object.entries(state).flatMap<K, F, G>(
    mapper
  ) as {} as readonly UU[KK][];
  return Object.fromEntries<KK, UU>(entries);
};
