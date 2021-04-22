import React from 'react'

import './Sidebar.css'

import { SidebarData } from '../SidebarData'
import { NavLink } from 'react-router-dom'
export function Sidebar() {
  return (
    <div className='sidebar'>
      {SidebarData.map((val, key) => {
        return (
          <NavLink
            key={key}
            activeClassName='active'
            className='row'
            to={val.link}
          >
            <div className='nav-link'>
              <div className='sidebar-icon'>{val.icon}</div>
              <div>{val.title}</div>
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}