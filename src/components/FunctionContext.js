import React, {useContext} from 'react'
import { ThemeContext } from '../hooks/UseContext'

function FunctionContext() {
    const dark = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: dark ? '#333' : '#ccc',
        color: dark ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

  return (
    <div style={themeStyles}>FunctionContext Theme</div>
  )
}

export default FunctionContext