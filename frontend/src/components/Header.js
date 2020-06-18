import React from 'react'

import './Header.css'

function Header(){
  return(
    <div className="header">
      <h1>Machine Viewer</h1>
      <div className="header-options">
        <a href="#">Procurar</a>
        <a href="#">Cadastrar</a>
      </div>
    </div>
  )

}

export default Header