import React, { Component } from "react";
import FormMessage from "../components/FormMessage";
import ListMessage from "../components/ListMessage";
import welcomeImg from "../images/programadoresynovatos.jpg";
import { AppString } from "../config/Constants";
import { myFirestore } from "../config/MyFirebase";
import moment from "moment";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };

    this.currentUserId = localStorage.getItem(AppString.ID);
    this.currentUserNickname = localStorage.getItem(AppString.NICKNAME);
    this.groupChatId = null;
    this.listMessage = [];
    this.removeListener = null;
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.currentPairUser !== prevProps.currentPairUser) {
      this.getListHistory();
    }
  };

  onSendMessage = (content, type) => {
    if (content.trim() === "") {
      return;
    }

    const timestamp = moment().valueOf().toString();

    const itemMessage = {
      idFrom: this.currentUserId,
      idTo: this.props.currentPairUser.id,
      timestamp: timestamp,
      content: content.trim(),
      type: type,
    };

    myFirestore
      .collection(AppString.MESSAGES)
      .doc(this.groupChatId)
      .collection(this.groupChatId)
      .doc(timestamp)
      .set(itemMessage)
      .then(() => {
        this.child.scrollToMyRef();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  hashString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
      hash = hash & hash;
    }
    return hash;
  };

  getListHistory = () => {
    if (this.removeListener) {
      this.removeListener();
    }
    this.listMessage.length = 0;
    if (
      this.hashString(this.currentUserId) <=
      this.hashString(this.props.currentPairUser.id)
    ) {
      this.groupChatId = `${this.currentUserId}-${this.props.currentPairUser.id}`;
    } else {
      this.groupChatId = `${this.props.currentPairUser.id}-${this.currentUserId}`;
    }

    this.removeListener = myFirestore
      .collection(AppString.MESSAGES)
      .doc(this.groupChatId)
      .collection(this.groupChatId)
      .onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === AppString.DOC_ADDED) {
              this.listMessage.push(change.doc.data());
            }
          });
          this.setState({ isLoading: false });
        },
        (err) => {
          console.log(err);
        }
      );
  };

  render() {
    return (
      <React.Fragment>
        <div id="uncolabChat_righttab">
          {this.props.currentPairUser ? (
            <>
              <ListMessage
                ref={(element) => {
                  this.child = element;
                }}
                currentUser={this.currentUserId}
                currentPairUser={this.props.currentPairUser}
                messages={this.listMessage}
              />
              <FormMessage
                onChange={this.props.onChange}
                inputValues={this.props.inputValues}
                onKeyPress={this.props.onKeyPress}
              />
            </>
          ) : (
            <>
              <div className="wrapper-welcome">
                <h4>
                  <strong>{this.currentUserNickname} </strong>
                  Bienvenido a programadores y novatos
                </h4>
                <img src={welcomeImg} alt="programadores y novatos" />
                <p>
                  <strong>PLaS </strong>
                  <i>Research Group Programming Languages and Systems</i>
                </p>
              </div>
            </>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Messages;
