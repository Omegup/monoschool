export const forward = <T, V extends T>(
  ref: React.ForwardedRef<T>
): React.ForwardedRef<V> =>
  typeof ref === 'function' ? ref : ref && ((e) => (ref.current = e));
