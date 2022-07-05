import React from 'react'

const Header = ({title}) => {
  // const headerStyle = {
  //   backgroundColor: "red",
  //   color: "#fff"
  // };
  return (
    <header
      //  style={
      //   {
      //     backgroundColor: "mediumblue",
      //     color:"#fff"
      //   }
      // }

      // style={headerStyle}

    >
          <h1>{title}</h1>
    </header>
  )
}

export default Header;