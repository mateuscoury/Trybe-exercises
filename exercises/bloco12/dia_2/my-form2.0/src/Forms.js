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
          <InputText type='text' maxLength='40'/>
        </fieldset>
      </section>
    )
  }
}


export default Forms

