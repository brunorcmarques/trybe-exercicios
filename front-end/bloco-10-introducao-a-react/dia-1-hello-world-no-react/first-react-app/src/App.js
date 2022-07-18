import React, { Component } from 'react'
import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const arrayCompromissos = ['Estudar', 'Descansar'];

class App extends Component {
  render() {
    return (
      <main>
      <Header />
      <Content />
      <ul>{ arrayCompromissos.map(e => Task(e)) }</ul>
      <Footer />
      </main>
    )
  }
}

export default App;
