// import logo from './logo.svg';
// import './App.css';

// function header git() {
//   return <h1>Hello everyone</h1>
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Tammy <code>src/App.js</code> trying to edit this thing.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  const { name, color, fruit, className } = props;
  return (
    <h1 className={className}>
      {name} is {color} like a {fruit}
    </h1>
  );
}

function Footer({ nickname }) {
  return (
    <div>
      <h1>goodbye {nickname}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header
        className="header-tobia"
        name="Tobia"
        color="blue"
        fruit="blueberry"
      />
      <Header name="Tanya" color="orange" fruit="orange" />
      <Footer nickname="Jimy" />
    </div>
  );
}

export { App, Header, Footer };