import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Logo = (props) => {
  return (
    <div 
        className='flex-none 
                    mx-3 my-3'>
                {props.name}
    </div>
  )
}

export default Logo