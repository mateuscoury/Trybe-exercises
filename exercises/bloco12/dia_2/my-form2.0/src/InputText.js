import React from 'react'

class TextInput extends React.Component{
  
  render(){
    const {maxLength,type,required,nome} = this.props
    return(
      <label>
      {nome}:
      <input type={type} maxLength={maxLength} required={required} id='nome'onKeyUp="this.value = this.value.toUpperCase();" ></input>
    </label>
    )
  }
}

export default TextInput