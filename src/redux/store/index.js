import { reducer } from './reducer'

let state = {
  count: 0
}
const createStore = () => {
  // getState 获取状态
  const getState = () => {
    return state
  }

  // 观察者模式
  const listeners = []
  // subscribe 订阅
  const subscribe = (listener) => {
    listeners.push(listener)
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    // publish 发布
    listeners.forEach(listener => {
      listener()
    })
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}
const store = createStore()

export default store
