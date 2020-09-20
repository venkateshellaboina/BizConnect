import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from '../../store/index';
import client from "../../services/client";
import { ApolloProvider } from "react-apollo";
import Navigation from '../../components/navigation/navigation';


const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
         <Navigation />
        </Router>
      </ApolloProvider>
      </Provider>
    );
  }
}
export default App;
