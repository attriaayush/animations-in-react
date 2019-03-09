import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import random from 'random-name';
import './index.css'

export default class ReactTransitionClass extends Component {
  constructor(props) {
    super(props);
    this.state = { items: ['Navidad Steen'] }
  }
  handleAdd() {
    let newItems = this.state.items;
    newItems.push(random());
    this.setState({ items: newItems })
  }
  handleRemove(index) {
    let newItems = this.state.items.slice();
    newItems.splice(index, 1);
    this.setState({ items: newItems })
  }
}