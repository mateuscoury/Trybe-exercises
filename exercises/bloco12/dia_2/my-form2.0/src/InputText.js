import React from 'react'

class TextInput extends React.Component{
  render(){
    const {maxLength,type,required} = this.props
    return(
      <label>
      Nome:
      <input type={type} maxLength={maxLength} required={required} id='nome'></input>
    </label>
    )
  }
}

export default TextInput