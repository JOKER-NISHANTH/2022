import React from 'react'

const Footer = ({len:l}) => {
    // const today = new Date();
  return (
      <footer>
          <p>{l} List { l === 1 ? 'Item' : 'Items'}</p>
          {/* <p>Copyright &copy; { today.getFullYear()}</p> */}
      </footer>
  )
}

export default Footer