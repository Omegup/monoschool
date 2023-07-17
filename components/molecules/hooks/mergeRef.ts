export function mergeRef<T>(
  ...refs: Array<React.MutableRefObject<T> | React.RefCallback<T>>
) {
  return (el: T) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(el)
      } else {
        ref.current = el
      }
    })
  }
}