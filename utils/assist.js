export function throwIfMissing() {
  throw new Error('Missing parameter')
}

function foo(mustBeProvided = throwIfMissing()) {
  return mustBeProvided
}

foo()


export default {
  throwIfMissing
}


