import React, { Component } from "react";
import { myFirestore } from "../config/MyFirebase";
import ReactLoading from "react-loading";
import HeaderChat from "../components/HeaderChat";
import UserList from "../components/UserList";
import Messages from "../components/Messages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ChatWrapper.css";
import { AppString } from "../config/Constants";

class ChatWrapper extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      inputValue: "",
      users: [],
      currentPairUser: null,
    };
    this.currentUserId = localStorage.getItem(AppString.ID);
    this.currentUserNickname = localStorage.getItem(AppString.NICKNAME);
  }

  componentDidMount() {
    this.verifyUser();
    this.getListUser();
  }

  verifyUser() {
    myFirestore
      .collection(AppString.USERS)
      .where(AppString.NICKNAME, "==", "jhonmendex")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          localStorage.setItem(AppString.ID, doc.id);
          localStorage.setItem(AppString.NICKNAME, doc.data().nickname);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  getListUser = () => {
    myFirestore
      .collection(AppString.USERS)
      .orderBy("nickname")
      .onSnapshot(
        (snap) => {
          this.setState({
            isLoading: false,
            users: snap.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            }),
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  getPairUser = (data) => {
    this.setState({ currentPairUser: data });
  };

  updateMessage = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onKeyboardPress = (e) => {
    if (e.key === "Enter") {
      this.child.onSendMessage(this.state.inputValue, 0);
      this.setState({ inputValue: "" });
    }
  };

  render() {
    const { inputValue, users } = this.state;
    return (
      <>
        {this.state.isLoading ? (
          <div className="viewLoading">
            <ReactLoading
              type={"bubbles"}
              color={"#94b43b"}
              height={"10%"}
              width={"10%"}
              className="loadding-chat"
            />
          </div>
        ) : null}
        <HeaderChat currentUser={this.currentUserNickname} />
        <div id="main_containerChat" className="row">
          <UserList users={users} getPairUser={this.getPairUser} />
          <Messages
            onChange={this.updateMessage}
            inputValues={inputValue}
            onKeyPress={this.onKeyboardPress}
            currentPairUser={this.state.currentPairUser}
            ref={(element) => {
              this.child = element;
            }}
          />
        </div>
      </>
    );
  }
}

export default ChatWrapper;
