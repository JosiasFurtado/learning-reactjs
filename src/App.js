import React from 'react';
import './App.css';
import Header from './components/Header'
import PostList from './components/PostList'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="posts">
      <PostList />
      </div>    
    </div>
  );
}

export default App;
