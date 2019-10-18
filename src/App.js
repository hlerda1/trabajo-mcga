//import React, {Component} from 'react';
import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Card from './card'
import Login from './components/login'

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;


// class App extends React.Component {
//
//   state = {
//     titulo: 'mi trabajo de mcga'
//   }
//
//   componentWillMount = () => {
//     console.log('se esta por montar/dibujar el componente');
//   }
//
//   componentDidMount= () => {
//     console.log('Ya se dibujo el componente');
//   }
//
//   componentWillReceiveProps(nextProps, nextState) {
//     console.log('Se actualizó el componente');
//     console.log(nextState);
//   }

  ////Este componenete no permite el re-renderizado, por lo que el boton no funcionaria
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('state actual', this.state);
  //   console.log('state actualizado', nextState);
  //   return false;
  // }

//   render() {
//     console.log('Se esta dibujando el componente');
//     return(
//       <div>
//         <button onClick={()=>{
//           this.setState({titulo: 'Nuevo Titulo'})
//         }}>
//         Cambiar Titulo
//         </button>
//         <Card text={this.state.titulo} />
//       </div>
//     )
//   }
// }


  // <div>{this.state.titulo}</div>

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         Adios Mundo
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

// export default App;
