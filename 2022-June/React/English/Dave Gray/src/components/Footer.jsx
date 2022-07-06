import React from 'react'

const Footer = ({len:l}) => {
    const today = new Date();
  return (
      <footer>
          <p>{ l} Items</p>
          <p>Copyright &copy; { today.getFullYear()}</p>
      </footer>
  )
}

export default Footer