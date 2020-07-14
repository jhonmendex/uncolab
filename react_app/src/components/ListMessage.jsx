import React from "react";

const ListMessage = ({ messages }) => (
  <>
    <div className="chat-content">
      {messages.map((msg, index) => (
        // <li key={index}>{msg.data.mensaje}</li>

        <div key={index}>
          <div className="uncolabChat_messagebox">
            <div className=" uncolabChat_chatboxmessage">
              <span className="uncolabChat_groupusername">
                otro usuario: {msg.data.mensaje}
              </span>
            </div>
            {/* <span className="uncolabChat_ts">7:16AM</span> */}
          </div>
          <div className="uncolabChat_messagebox_self">
            <div className="uncolabChat_chatboxmessage uncolabChat_self">
              <span className="uncolabChat_chatboxmessagecontent">
                mi usuario: {msg.data.mensaje}
              </span>
            </div>
            {/* <span className="uncolabChat_self_ts ">9:00PM</span> */}
          </div>
        </div>
      ))}
    </div>
  </>
);

export default ListMessage;
