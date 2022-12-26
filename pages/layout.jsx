import React from 'react'
import Menu from './component/menu'

const Layout = (props) => {
  return (
    <div>
        <Menu/>
        {props.children}
    </div>
  )
}

export default Layout