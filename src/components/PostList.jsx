import React, {Component} from "react";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {

  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    return (
      <div>
        <h2>Post List</h2>
      </div>

      )
  }
}

export default connect(null, {fetchPosts})(PostList);
