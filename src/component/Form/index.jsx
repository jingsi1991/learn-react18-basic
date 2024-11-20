import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      remark: 1231231,
      isAccept: false,
      selectItem: 'apple',
      fruit: ['apple'],

      hobbies: [
        { value: "sing", text: '唱', isChecked: false },
        { value: "dance", text: '跳', isChecked: false },
        { value: "rap", text: 'rap', isChecked: false }
      ]
    }
  }

  handleSubmitClick = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    const name = event.target.name
    const value = event.target.value
    const type = event.target.type

    switch (type) {
      case 'checkbox':
        this.setState({
          [name]: event.target.checked
        })
        break;

      default:
        this.setState({
          [name]: value
        })
        break;
    }
  }

  handleHobbiesChange = (event, index) => {
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = event.target.checked

    this.setState({
      hobbies: hobbies
    })
  }

  // select
  handleSelectChange = (event) => {
    const multiple = event.target.multiple
    const name = event.target.name
    let value = event.target.value
    if (multiple) {
      const options = Array.from(event.target.selectedOptions)
      value = options.map(opt => opt.value)
    }

    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password, remark, isAccept, hobbies, selectItem, fruit } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
          <div>
            <label htmlFor='username'>
              用户：<input id='username' type='text' name='username' value={username} onChange={this.handleInputChange} />
            </label>
          </div>
          <div>
            <label htmlFor='password'>
              密码：<input id='password' type='password' name='password' value={password} onChange={this.handleInputChange} />
            </label>
          </div>

          <div>
            爱好：
            {
              hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.value} key={item.value}>
                    <input id={item.value} type="checkbox" name={item.value} checked={item.isChecked} onChange={(e) => this.handleHobbiesChange(e, index)} />{item.text}
                  </label>
                )
              })
            }
          </div>
          <div>
            <label htmlFor='remark'>
              备注：<textarea id='remark' name='remark' value={remark} onChange={this.handleInputChange} />
            </label>
          </div>

          <div>
            select单选：
            <label htmlFor="selectItem">
              <select name="selectItem" id="selectItem" value={selectItem} onChange={this.handleSelectChange}>
                <option value="apple">苹果</option>
                <option value="banana">香蕉</option>
                <option value="orange">橘子</option>
              </select>
            </label>
          </div>

          <div>
            select多选：
            <label htmlFor="fruit">
              <select name="fruit" id="fruit" value={fruit} onChange={this.handleSelectChange} multiple>
                <option value="apple">苹果</option>
                <option value="banana">香蕉</option>
                <option value="orange">橘子</option>
              </select>
            </label>
          </div>


          <div>
            <label htmlFor="accept">
              <input id='accept' type="checkbox" name='isAccept' checked={isAccept} onChange={this.handleInputChange} />同意
            </label>
          </div>
          <button type='submit'>注册</button>
        </form>
      </div>
    )
  }
}
export default Form