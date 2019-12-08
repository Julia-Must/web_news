import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
//import GlobalStyles from './styles/globals';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import {Provider} from 'react-redux';
//
// function App() {
//     return (
//         <div className="App">
//          <GlobalStyles />
//          <header className="App-header">
//              {/*<img src={logo} className="App-logo" alt="logo" />*/}
//           <p>
//            Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//            Learn React
//           </a>
//          </header>
//         </div>
//     );
// }
//
// export default App;

const renderApp = () => {
 const initialState = {};
 const store = configureStore(initialState);//повторное создание уже созд в стор/индекс.js

   store.subscribe(() => {
       console.log('store change!!!')
   })

 store.dispatch({type: '@webnews/@@INIT'});

console.log(store)
console.log(store.getState());


    ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>,
         document.getElementById('root')
    );
    }

    renderApp();


serviceWorker.unregister();
