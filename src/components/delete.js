import React from 'react'

export default function Delete(props) {
  return (
    <div>
      <input
        className='btn btn-primary'
        onClick={() => props.getOneDelete(`${props.id}`)}
        type='submit'
        value='Delete'
      ></input>
    </div>
  )
}
