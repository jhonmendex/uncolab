import React, { Component } from "react";
import FormMessage from "../components/FormMessage";
import ListMessage from "../components/ListMessage";
class Messages extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="uncolabChat_righttab">
          <div className="uncolabChat_tabsubtitle">
            <div className="uncolabChat-users">
              <div className="uncolabChat_userlist-headermsg" amount="0">
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
              </div>
            </div>
          </div>

          <ListMessage messages={this.props.messages} />
          <FormMessage
            onChange={this.props.onChange}
            onSubmit={this.props.onSubmit}
            formValues={this.props.formValues}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Messages;
