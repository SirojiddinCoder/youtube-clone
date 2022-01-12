import React, { useContext,useState } from "react";
import { Navbar } from "./style";

import { data } from "../../mock/data";

import { MovieContext } from "../../context/movie";

import Menu from "../../assets/icons/guide.svg";
import Logo from "../../assets/icons/Logo.svg";
import SearchIcon from "../../assets/icons/search.svg";
import Camera from "../../assets/icons/camera.svg";
import Topbar from "../../assets/icons/left-topbar.svg";
import Bell from "../../assets/icons/bell.svg";
import UserImg from "../../assets/img/pp.png";


// import { ThemeProvider, createGlobalStyle } from 'styled-components';
// import * as sss from 'styled-components';
// console.log(sss, 'styled');

// export const lightTheme = {
//   body: '#33FF55',
//   fontColor: '#FF1940',
// };

// export const darkTheme = {
//   body: '#FF1940',
//   fontColor: '#33FF55',
// };


// export const Globalstyles = createGlobalStyle`
// body{
//     background-color: ${(props) => {
//       console.log(props, 'props');

//       return props.theme.body;
//     }};
// }

// `;


const Header = () => {

  // const [theme, setTheme] = useState('light');

  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light');
  // };

  const [state, setState] = useContext(MovieContext);
  const onChange = (e) => {
    const { value } = e.target;
    let res = data.filter((val) =>
      val.title.toLowerCase().includes(value.toLowerCase())
    );
    setState(res);
  };
  return (
    <Navbar>
      <Navbar.Left>


        <img src={Menu} alt="Menu" width={24} height={24} />
        <img className="logo" src={Logo} alt="Logo" width={90} height={20} />
        <Navbar.Span>TR</Navbar.Span>
      </Navbar.Left>
      <Navbar.Search>



        <Navbar.Input placeholder="Search" onChange={onChange} />
        <Navbar.SearchBtn>
          <img src={SearchIcon} alt="Search Icon" width={24} height={24} />
        </Navbar.SearchBtn>
      </Navbar.Search>
      <Navbar.Right>
       {/* <button>Night mode</button> */}

       {/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Globalstyles theme={theme === 'light' ? lightTheme : darkTheme} />
      <styledApp>

      <button onClick={themeToggler}>darkMode</button>
      </styledApp>



    </ThemeProvider> */}

        <img src={Camera} alt="Camera icon" width={24} height={24} />
        <img src={Topbar} alt="Topbar icon" width={24} height={24} />
        <img src={Bell} alt="Bell icon" width={24} height={24} />
        <img src={UserImg} alt="Bell icon" width={24} height={24} />
      </Navbar.Right>






    </Navbar>
  );
};

export default Header;
