// 定义状态
const defaultState = {
  count: 0
}

// 修改状态
const changeState = (action) => {
  action = action || { type: '' }
  switch (action.type) {
    case 'increment':
      defaultState.count++
      break;

    case 'decrement':
      defaultState.count--
      break;

    default:
      break;
  }
}

// DOM操作
const renderDom = () => {
  let countEle = document.querySelector("#count")
  countEle.innerHTML = defaultState.count
}


// 定义dispatch
export const dispatch = (action) => {
  changeState(action)
  renderDom()
}