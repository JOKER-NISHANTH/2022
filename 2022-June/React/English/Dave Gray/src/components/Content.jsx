import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Black', "Brown", 'Red', "Blue",'Green']
        const ran = Math.floor(Math.random() * names.length)
        return names[ran]
      }
  return (
      <main>
          Hello {handleNameChange()}!
    </main>
  )
}

export default Content