import React, { Component } from 'react'



export default class redirect extends Component {
  componentDidMount(){
    window.location = localStorage.getItem( 'location' )
  }
  render() {
    return (
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' />
    )
  }
}