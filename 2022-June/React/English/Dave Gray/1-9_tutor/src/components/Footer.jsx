import React from 'react'

const Footer = ({len:l}) => {
    // const today = new Date();
  return (
      <footer>
          <p>{l}  { l === 1 ? 'remain' : 'remains'}</p>
          {/* <p>Copyright &copy; { today.getFullYear()}</p> */}
      </footer>
  )
}

export default Footer