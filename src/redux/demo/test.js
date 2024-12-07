const state = {
  count: 0
}

const createStore = () => {
  const listeners = []
  const getState = () => {
    return state
  }

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  const dispatch = (action) => {
    state = reducer(state, action)

    listeners.forEach(listener => listener())
  }


  return {
    getState,
    dispatch,
    subscribe
  }
}

const store = createStore()

export default store 