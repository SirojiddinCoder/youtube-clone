import "./App.css";
import Home from "./pages/Home/Home";
import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as sss from 'styled-components';
console.log(sss, 'styled');

export const lightTheme = {
  body: '#fff',
  fontColor: '#000',
};

export const darkTheme = {
  body: '#000',
  fontColor: '#fff',
};


export const Globalstyles = createGlobalStyle`
body{
    background-color: ${(props) => {
      console.log(props, 'props');

      return props.theme.body;
    }};
}

`;

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
   <div>
      <Home />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Globalstyles theme={theme === 'light' ? lightTheme : darkTheme} />
      <styledApp>

      {/* <button style={{marginLeft: "500px"}} onClick={themeToggler}>Dark Mode</button> */}
      </styledApp>
    </ThemeProvider>
   </div>
  );
}

export default App;