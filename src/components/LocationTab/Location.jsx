import React from 'react'
import LgaInput from './LgaInput'
import StateInput from './StateInput'
import WardInput from './WardInput'

const Location = ({formState, setFormState, cLga , setLga, cWard, setWard}) => {
  return (
        <>
        <StateInput formState={formState} setFormState={setFormState} />
        <LgaInput cLga={cLga} setLga={setLga} />
        <WardInput cWard={cWard} setWard={setWard} />
        </>
  )
}

export default Location

