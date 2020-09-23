import React from "react";
import { AppString } from "../config/Constants";
import Notification from "../components/Notification";
const userList = (props) => (
  <React.Fragment>
    <div id="uncolabChat_leftbar">
      <div className="tab-content" id="nav-tabContent">
        <div id="home" role="tabpanel" aria-labelledby="nav-home-tab">
          {props.users.map((usr, index) =>
            props.taskState === "true"
              ? props.currentUserId !== usr.id &&
                !usr.data.programmer && (
                  <div
                    key={index}
                    className="uncolabChat-users"
                    onClick={() => props.getPairUser(usr.id, usr.data)}
                  >
                    <div
                      className={
                        props.currentPairUser &&
                        props.currentPairUser.id === usr.id
                          ? "uncolabChat_userlist_focus"
                          : "uncolabChat_userlist"
                      }
                    >
                      <span className="uncolabChat_userscontentavatar">
                        <img
                          alt="imagen"
                          className="uncolabChat_userscontentavatarimage"
                          src={
                            usr.data.programmer
                              ? AppString.PROGRAMMER_IMAGE
                              : AppString.ROOKIE_IMAGE
                          }
                        />
                      </span>
                      <div className="uncolabChat_chatboxDisplayDetails">
                        <div
                          className="uncolabChat_userdisplayname"
                          title={usr.data.nickname}
                        >
                          {usr.data.nickname}
                        </div>
                        <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                        <Notification
                          user={props.currentUserId}
                          peer={usr.id}
                        />
                      </div>
                    </div>
                  </div>
                )
              : props.currentUserId !== usr.id &&
                usr.data.programmer && (
                  <div
                    key={index}
                    className="uncolabChat-users"
                    onClick={() => props.getPairUser(usr.id, usr.data)}
                  >
                    <div
                      className={
                        props.currentPairUser &&
                        props.currentPairUser.id === usr.id
                          ? "uncolabChat_userlist_focus"
                          : "uncolabChat_userlist"
                      }
                    >
                      <span className="uncolabChat_userscontentavatar">
                        <img
                          alt="imagen"
                          className="uncolabChat_userscontentavatarimage"
                          src={
                            usr.data.programmer
                              ? AppString.PROGRAMMER_IMAGE
                              : AppString.ROOKIE_IMAGE
                          }
                        />
                      </span>
                      <div className="uncolabChat_chatboxDisplayDetails">
                        <div
                          className="uncolabChat_userdisplayname"
                          title={usr.data.nickname}
                        >
                          {usr.data.nickname}
                        </div>
                        <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                        <Notification
                          user={props.currentUserId}
                          peer={usr.id}
                        />
                      </div>
                    </div>
                  </div>
                )
          )}
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default userList;
