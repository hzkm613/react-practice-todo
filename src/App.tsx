import { createGlobalStyle } from 'styled-components';
import ToDoList from './components/ToDoList';
import { themeState } from './components/atoms';  
import { lightTheme, darkTheme } from './theme'; 
import { ThemeProvider } from 'styled-components';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
font-family: 'Source Sans Pro', sans-serif;

* {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}

a {
  text-decoration: none;
  color: inherit;
}

menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => props.theme.accentColor};
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
`;


function App() {

  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyle />
    <ToggleButton onClick={toggleTheme}>
      {theme === 'light' ? <NightlightRoundedIcon /> : <LightModeRoundedIcon />}
    </ToggleButton>
    <ToDoList />
  </ThemeProvider>
  )
}

export default App
