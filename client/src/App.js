import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "react-apollo";
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import './App.css';
//
import Contacts from './Contacts';
import AddContact from './AddContact';
import ContactSingle from './ContactSingle';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>
            <div className="navbar-fixed">
              <nav className="teal darken-1">
                <div className="nav-wrapper">
                  <Link to="/" className="brand-logo center">CRM</Link>
                </div>
              </nav>
            </div>
              <AddContact />
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route path="/contact/:contactId" component={ContactSingle}/>
              </Switch>
          </div>

        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
