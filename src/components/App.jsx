import React, {Component} from 'react';

import PostList from './PostList';

class App extends Component {
  render(){
    return (
      <div className="container">
        <h1>Hello blogs</h1>
        <PostList />
      </div>
      )
  }
}

export default App
