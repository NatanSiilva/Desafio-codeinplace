import React, { Component } from 'react'
import Router from './components/Routes';
import { ApolloProvider } from '@apollo/client'
import client from './services/apollo'


function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
    
  )
}

export default App;
