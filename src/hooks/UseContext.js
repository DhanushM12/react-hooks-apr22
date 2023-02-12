import React, {useState} from 'react'
import ClassContext from '../components/ClassContext';
import FunctionContext from '../components/FunctionContext';

export const ThemeContext = React.createContext();


function UseContext() {

    const [dark, setDark] = useState(false)
    function toggleTheme(){
        setDark(prev => !prev)
    }
  return (
    <div>
        <h1>Context</h1>
        <ThemeContext.Provider value={dark}>
            <button onClick={toggleTheme}>Change</button>
            <ClassContext />
            <FunctionContext />
        </ThemeContext.Provider>
    </div>
  )
}

export default UseContext