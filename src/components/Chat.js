import React, { Component } from 'react';
import SendMessage from './SendMessage';
import { db } from '../utils/db';

export default class Chat extends Component {

  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    db.collection("messages").orderBy('date').onSnapshot(snap => {
      const result = snap.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
      this.setState({ messages: result });
    });
  }

  render() {
    return (
      <div>
        <h1>Chat</h1>
        <p>{`Your nickname is: ` + this.props.nickname}</p>
        <div>{this.state.messages.map(message => (
          <div key={message.id}>
            {message.date.toTimeString() + ': ' + message.nickname + ': ' + message.message}
          </div>
        ))}</div>
        <SendMessage nickname={this.props.nickname} />
      </div>
    );
  }
}