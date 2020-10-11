const isNothing = (value) => value === null || typeof value === 'undefined';

const MaybeNull = (value) => ({
  map: (fn) => (isNothing(value) ? MaybeNull(null) : MaybeNull(fn(value))),
  value,
});

export default MaybeNull;
