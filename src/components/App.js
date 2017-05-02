import React from "react"
import { Link } from "react-router"
import styled, { ThemeProvider } from 'styled-components'

const MyButton = styled.button`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
`;

const theme = {
  color: "red",
  backgroundColor: "white"
}

const App = ({locale, onSetLocale, children}) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
          <ul role="nav">
              <li><Link to="/todolist/">Todo List</Link></li>
              <li><Link to="/puzzle/">Puzzle Math</Link></li>
              <li><Link to="/bar">Bar</Link></li>
          </ul>

          <MyButton type="button" onClick={(x) => onSetLocale('en')}>Change lang to ENGLISH</MyButton>
          <MyButton type="button" onClick={(x) => onSetLocale('fr')}>Change lang to FRANCE</MyButton>

          {children}
      </div>
    </ThemeProvider>
  )
}

export default App
