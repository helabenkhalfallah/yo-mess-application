const matched = (x) => ({
  on: () => matched(x),
  otherwise: () => x,
});
const Matcher = (x) => ({
  on: (pred, fn) => (pred(x) ? matched(fn(x)) : Matcher(x)),
  otherwise: (fn) => fn(x),
});

export default Matcher;
