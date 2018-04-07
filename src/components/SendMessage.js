import React, { Component } from 'react';
import { db } from '../utils/db';

export default class SendMessage extends Component {

  onSendMessage(e) {
    e.preventDefault();
    if (this.input.value !== "" && this.props.nickname) {
      db.collection('messages').add({
        nickname: this.props.nickname,
        message: this.input.value,
        date: new Date()
      });
      this.input.value = "";
    }
  }

  render() {
    return (
      <div>
        <p>Send message</p>
        <form onSubmit={(e) => this.onSendMessage(e)}>
          <input type="text" ref={ref => this.input = ref} placeholder="Type messsage..." />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}