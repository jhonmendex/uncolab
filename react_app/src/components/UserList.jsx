import React from "react";
import programmerImg from "../images/programmer.svg";
import rookieImg from "../images/rookie.svg";
const userList = (props) => (
  <React.Fragment>
    <div id="uncolabChat_leftbar">
      <div className="tab-content" id="nav-tabContent">
        <div id="home" role="tabpanel" aria-labelledby="nav-home-tab">
          {props.users.map((usr, index) => (
            <div
              key={index}
              className="uncolabChat-users"
              onClick={() => props.getPairUser(usr.data)}
            >
              <div className="uncolabChat_userlist">
                <span className="uncolabChat_userscontentavatar">
                  <img
                    alt="imagen"
                    className="uncolabChat_userscontentavatarimage"
                    src={usr.data.programmer ? programmerImg : rookieImg}
                  />
                </span>
                <div className="uncolabChat_chatboxDisplayDetails">
                  <div className="uncolabChat_userdisplayname" title="Alex">
                    {usr.data.nickname}
                  </div>
                  <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                  <div className="uncolabChat_userdisplaystatus">
                    I'm available
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default userList;
