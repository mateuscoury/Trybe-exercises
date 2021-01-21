import React from 'react'
import InputText from './InputText'

class Forms extends React.Component{
  constructor(){
    super()
    
  }
  render(){
    return (
      <section>
        <fieldset>
          <InputText type='text' maxLength='40'required='true' nome='Nome'/>
          <InputText type='email' maxLength='50' required='true'nome='email'/>
        </fieldset>
      </section>
    )
  }
}


export default Forms

