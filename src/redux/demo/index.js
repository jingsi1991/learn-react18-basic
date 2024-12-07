const { createStore } = require('redux')
const reducer = require('./reducer')

const store = createStore(reducer)

store.dispatch({type: 'increment'})

console.log(store.getState())

console.log(store)

