import React, { Component } from "react";
import { myFirestore } from "../config/MyFirebase";

import HeaderChat from "../components/HeaderChat";
import UserList from "../components/UserList";
import Messages from "../components/Messages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ChatWrapper.css";
// <!-- Sidebar <div id="wrapper-chat" class="toggled"> -->

class ChatWrapper extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        message: "",
      },
      messages: [],
    };
  }

  componentDidMount() {
    this.getListMessages();
  }
  getListMessages = () => {
    myFirestore.collection("messages").onSnapshot(
      (snap) => {
        this.setState({
          messages: snap.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          }),
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  updateMessage = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      form: {
        message: "",
      },
    });

    myFirestore
      .collection("messages")
      .add({
        mensaje: this.state.form.message,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { messages, form } = this.state;
    return (
      <>
        <HeaderChat />
        <div id="main_containerChat" className="row">
          <UserList />
          <Messages
            onChange={this.updateMessage}
            onSubmit={this.handleSubmit}
            formValues={form}
            messages={messages}
          />
        </div>
      </>
    );
  }
}

export default ChatWrapper;
