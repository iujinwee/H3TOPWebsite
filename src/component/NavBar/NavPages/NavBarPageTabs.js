import React from 'react'
import NavBarPage from './NavBarPage'

const NavBarPageTabs = (props) => {
  return (
    <div className='col-start-3 grid-flow-col'> 
      <ul class="flex mx-3 my-3 gap-5">
          <NavBarPage
            name="Home"/>

          <NavBarPage 
            name="Story"/>

          <NavBarPage
            name="Clans"/>

          <NavBarPage 
            name="Visa"/>

          <NavBarPage 
            name="Our Team"/>

          <NavBarPage 
            name="Albums"/>

      </ul>
    </div>
  )
}

export default NavBarPageTabs