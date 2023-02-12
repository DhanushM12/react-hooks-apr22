import React, { Component } from 'react'
import { ThemeContext } from '../hooks/UseContext'

export default class ClassContext extends Component {
    themeStyles(dark){
        return{
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
            {
                dark => {
                    return <div style={this.themeStyles(dark)}>Class Theme</div>
                }
            }
        </ThemeContext.Consumer>
      </div>
    )
  }
}
