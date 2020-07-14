import React, { Component } from "react";

class UserList extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="uncolabChat_leftbar">
          <ul className="nav nav-tabs" id="chatTab" role="tablist">
            <li className="nav-item nav-tab-chat">
              <a
                href="#"
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Programmers
              </a>
            </li>
            <li className="nav-item nav-tab-chat">
              <a
                href="#"
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Teachers
              </a>
            </li>
            <li className="nav-item nav-tab-chat">
              <a
                href="#"
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Groups
              </a>
            </li>
          </ul>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane active"
              id="home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="uncolabChat-users">
                <div
                  id="uncolabChat_userlist_66"
                  className="uncolabChat_userlist"
                  amount="0"
                >
                  <span className="uncolabChat_userscontentavatar">
                    <img
                      alt="imagen"
                      className="uncolabChat_userscontentavatarimage"
                      src="//fast.cometondemand.net/images/noavatar.png"
                    />
                  </span>
                  <div className="uncolabChat_chatboxDisplayDetails">
                    <div className="uncolabChat_userdisplayname" title="Alex">
                      Nury
                    </div>
                    <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                    <div className="uncolabChat_userdisplaystatus">
                      I'm available
                    </div>
                  </div>
                  <div
                    className="uncolabChat_msgcounttext"
                    style={{ display: "none" }}
                  >
                    0
                  </div>
                </div>
              </div>
              <div className="uncolabChat-users">
                <div
                  id="uncolabChat_userlist_66"
                  className="uncolabChat_userlist"
                  amount="0"
                >
                  <span className="uncolabChat_userscontentavatar">
                    <img
                      alt="imagen"
                      className="uncolabChat_userscontentavatarimage"
                      src="//fast.cometondemand.net/images/noavatar.png"
                    />
                  </span>
                  <div className="uncolabChat_chatboxDisplayDetails">
                    <div className="uncolabChat_userdisplayname" title="Alex">
                      Maria
                    </div>
                    <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                    <div className="uncolabChat_userdisplaystatus">
                      I'm available
                    </div>
                  </div>
                  <div
                    className="uncolabChat_msgcounttext"
                    style={{ display: "none" }}
                  >
                    0
                  </div>
                </div>
              </div>
              <div className="uncolabChat-users">
                <div
                  id="uncolabChat_userlist_66"
                  className="uncolabChat_userlist"
                  amount="0"
                >
                  <span className="uncolabChat_userscontentavatar">
                    <img
                      alt="imagen"
                      className="uncolabChat_userscontentavatarimage"
                      src="//fast.cometondemand.net/images/noavatar.png"
                    />
                  </span>
                  <div className="uncolabChat_chatboxDisplayDetails">
                    <div className="uncolabChat_userdisplayname" title="Alex">
                      Juan
                    </div>
                    <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                    <div className="uncolabChat_userdisplaystatus">
                      I'm available
                    </div>
                  </div>
                  <div
                    className="uncolabChat_msgcounttext"
                    style={{ display: "none" }}
                  >
                    0
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="uncolabChat-users">
                <div
                  id="uncolabChat_userlist_66"
                  className="uncolabChat_userlist"
                  amount="0"
                >
                  <span className="uncolabChat_userscontentavatar">
                    <img
                      alt="imagen"
                      className="uncolabChat_userscontentavatarimage"
                      src="//fast.cometondemand.net/images/noavatar.png"
                    />
                  </span>
                  <div className="uncolabChat_chatboxDisplayDetails">
                    <div className="uncolabChat_userdisplayname" title="Alex">
                      Jhon
                    </div>
                    <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                    <div className="uncolabChat_userdisplaystatus">
                      I'm available
                    </div>
                  </div>
                  <div
                    className="uncolabChat_msgcounttext"
                    style={{ display: "none" }}
                  >
                    0
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="uncolabChat-users">
                <div
                  id="uncolabChat_userlist_66"
                  className="uncolabChat_userlist"
                  amount="0"
                >
                  <span className="uncolabChat_userscontentavatar">
                    <img
                      alt="imagen"
                      className="uncolabChat_userscontentavatarimage"
                      src="//fast.cometondemand.net/layouts/embedded/images/group.svg"
                      style={{ background: "#666" }}
                    />
                  </span>
                  <div className="uncolabChat_chatboxDisplayDetails">
                    <div className="uncolabChat_userdisplayname" title="Alex">
                      Piramide-group
                    </div>
                    <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                    <div className="uncolabChat_userdisplaystatus">
                      I'm available
                    </div>
                  </div>
                  <div
                    className="uncolabChat_msgcounttext"
                    style={{ display: "none" }}
                  >
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserList;
