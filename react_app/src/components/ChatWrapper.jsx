import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/ChatWrapper.css";
         // <!-- Sidebar <div id="wrapper-chat" class="toggled"> -->
class ChatWrapper extends Component {
  render() {
    return(

     <>
            <div id="uncolabChat_header">
              <div id="uncolabChat_self_container">
                <div id="uncolabChat_self_right">
                  <div id="uncolabChat_notification" style={{'padding-top': '6px'}}>
                    <i className="fa fa-bell"></i>
                  </div>
                </div>
                <div id="uncolabChat_self_left">
                  <div id="uncolabChat_self">
                        <span className="uncolabChat_userscontentavatar">
                            <img className="uncolabChat_userscontentavatarimage"
                                 src="//fast.cometondemand.net/images/noavatar.png"
                                 onError="this.onerror=null;this.src='//fast.cometondemand.net/admin/images/pixel.png'"/>
                        </span>
                    <div id="uncolabChat_selfDetails">
                      <div className="uncolabChat_userdisplayname">Pedros</div>
                      <span className="uncolabChat_userscontentdot uncolabChat_available"></span>
                      <div className="selfstatus uncolabChat_userdisplaystatus">I'm online</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="main_containerChat">
              <div id="uncolabChat_leftbar">
                <ul className="nav nav-tabs" id="chatTab" role="tablist">
                  <li className="nav-item nav-tab-chat">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                       aria-controls="home" aria-selected="true">Programmers</a>
                  </li>
                  <li className="nav-item nav-tab-chat">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                       aria-controls="profile" aria-selected="false">Teachers</a>
                  </li>
                  <li className="nav-item nav-tab-chat">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                       aria-controls="contact" aria-selected="false">Groups</a>
                  </li>
                </ul>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="uncolabChat-users">
                      <div id="uncolabChat_userlist_66" className="uncolabChat_userlist" amount="0">
                                <span className="uncolabChat_userscontentavatar">
                                    <img className="uncolabChat_userscontentavatarimage"
                                         src="//fast.cometondemand.net/images/noavatar.png"/>
                                </span>
                        <div className="uncolabChat_chatboxDisplayDetails">
                          <div className="uncolabChat_userdisplayname" title="Alex">Nury</div>
                          <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                          <div className="uncolabChat_userdisplaystatus">I'm available</div>
                        </div>
                        <div className="uncolabChat_msgcounttext" style={{display:'none'}}>0</div>
                      </div>
                    </div>
                    <div className="uncolabChat-users">
                      <div id="uncolabChat_userlist_66" className="uncolabChat_userlist" amount="0">
                                <span className="uncolabChat_userscontentavatar">
                                    <img className="uncolabChat_userscontentavatarimage"
                                         src="//fast.cometondemand.net/images/noavatar.png"/>
                                </span>
                        <div className="uncolabChat_chatboxDisplayDetails">
                          <div className="uncolabChat_userdisplayname" title="Alex">Maria</div>
                          <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                          <div className="uncolabChat_userdisplaystatus">I'm available</div>
                        </div>
                        <div className="uncolabChat_msgcounttext" style={{display:'none'}}>0</div>
                      </div>
                    </div>
                    <div className="uncolabChat-users">
                      <div id="uncolabChat_userlist_66" className="uncolabChat_userlist" amount="0">
                                <span className="uncolabChat_userscontentavatar">
                                    <img className="uncolabChat_userscontentavatarimage"
                                         src="//fast.cometondemand.net/images/noavatar.png"/>
                                </span>
                        <div className="uncolabChat_chatboxDisplayDetails">
                          <div className="uncolabChat_userdisplayname" title="Alex">Juan</div>
                          <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                          <div className="uncolabChat_userdisplaystatus">I'm available</div>
                        </div>
                        <div className="uncolabChat_msgcounttext" style={{display:'none'}}>0</div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className="uncolabChat-users">
                      <div id="uncolabChat_userlist_66" className="uncolabChat_userlist" amount="0">
                                <span className="uncolabChat_userscontentavatar">
                                    <img className="uncolabChat_userscontentavatarimage"
                                         src="//fast.cometondemand.net/images/noavatar.png"/>
                                </span>
                        <div className="uncolabChat_chatboxDisplayDetails">
                          <div className="uncolabChat_userdisplayname" title="Alex">Jhon</div>
                          <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                          <div className="uncolabChat_userdisplaystatus">I'm available</div>
                        </div>
                        <div className="uncolabChat_msgcounttext" style={{display:'none'}}>0</div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div className="uncolabChat-users">
                      <div id="uncolabChat_userlist_66" className="uncolabChat_userlist" amount="0">
                                <span className="uncolabChat_userscontentavatar">
                                    <img className="uncolabChat_userscontentavatarimage"
                                         src="//fast.cometondemand.net/layouts/embedded/images/group.svg"
                                         style={{background: '#666'}}/>
                                </span>
                        <div className="uncolabChat_chatboxDisplayDetails">
                          <div className="uncolabChat_userdisplayname" title="Alex">Piramide-group</div>
                          <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                          <div className="uncolabChat_userdisplaystatus">I'm available</div>
                        </div>
                        <div className="uncolabChat_msgcounttext" style={{display:'none'}}>0</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="uncolabChat_righttab">
                <div className="uncolabChat_tabsubtitle">
                  <div className="uncolabChat-users">
                    <div id="uncolabChat_userlist_67" className="uncolabChat_userlist" amount="0">
                                <span className="uncolabChat_userscontentavatar">
                                    <img className="uncolabChat_userscontentavatarimage"
                                         src="//fast.cometondemand.net/images/noavatar.png"/>
                                </span>
                      <div className="uncolabChat_chatboxDisplayDetails">
                        <div className="uncolabChat_userdisplayname" title="Alex">Maria</div>
                        <span className="uncolabChat_userscontentdot uncolabChat_desktop"></span>
                        <div className="uncolabChat_userdisplaystatus">I'm available</div>
                      </div>
                      <div className="uncolabChat_msgcounttext" style={{display:'none'}}>0</div>
                    </div>
                  </div>
                </div>
                <div className="slimScrollDiv">
                  <div className="uncolabChat_messagebox" id="uncolabChat_messagebox_33704">
                    <a id="uncolabChat_usersavatar_33704" className="uncolabChat_float_l">
                        <span className="uncolabChat_cr_other_avatar">
                            <img className="uncolabChat_userscontentavatarsmall uncolabChat_avatar_100000025753"
                                 title=""
                                 src="//fast.cometondemand.net/images/noavatar.png"/>
                        </span>
                    </a>
                    <div className=" uncolabChat_chatboxmessage">
                      <span className="uncolabChat_groupusername">Mensaje</span>
                    </div>
                    <span className="uncolabChat_ts">7:16AM</span>
                  </div>
                  <div className="uncolabChat_messagebox_self">
                    <div className="uncolabChat_chatboxmessage uncolabChat_self">
                      <span className="uncolabChat_chatboxmessagecontent">ho isdfsd sdfsdf asdsfsd</span>
                    </div>
                    <span className="uncolabChat_self_ts ">9:00PM</span>
                  </div>
                </div>
                <div id="uncolabChat_tabinputcontainer" style={{position: 'absolute'}}>
                  <div id="downplugins">
                    <div id="unolabChat_pluginuparrow_66">
                      <img className="uncolabChat_pluginuparrowimage"
                           src="//fast.cometondemand.net/layouts/embedded/images/circledown.svg"/>
                    </div>
                    <div id="uncolabChat_textarea" placeholder="Type your message" contentEditable="true">

                    </div>
                  </div>
                </div>
              </div>
            </div>
      </>
    )
  }
}

export default ChatWrapper;
