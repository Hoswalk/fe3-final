import React from 'react'

const Sent = ({client}) => {
  return (
    <>
        <h3>We appreciate the information, {client.name}!</h3>
        <h3>We will contact you at {client.email}!</h3>
    </>
  )
}

export default Sent