import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { myFirestore } from "../config/MyFirebase";
import { AppString } from "../config/Constants";

function getMessagesUser(user, peer) {
  let messageId = `${user}-${peer}`;
  let messageIdAux = `${peer}-${user}`;
  console.log(messageId);
  myFirestore
    .collection(AppString.MESSAGES)
    .doc(messageId)
    .collection(messageId)
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === AppString.DOC_ADDED) {
          console.log("notificacion para " + messageId);
        }
      });
    });

  myFirestore
    .collection(AppString.MESSAGES)
    .doc(messageIdAux)
    .collection(messageIdAux)
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === AppString.DOC_ADDED) {
          console.log("notificacion2 para " + messageId);
        }
      });
    });
}

function Notification(props) {
  const [notify, setNotify] = useState(false);
  useEffect(() => {
    // setInterval(() => {
    //   getMessagesUser(props.user, props.peer);
    // }, 3000);
    getMessagesUser(props.user, props.peer);
  });

  return (
    <FontAwesomeIcon className="notifications_user_list" icon="comment-dots" />
  );
}

export default Notification;
