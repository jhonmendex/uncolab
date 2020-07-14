import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class FormMessage extends Component {
  render() {
    return (
      <form
        action=""
        onSubmit={this.props.onSubmit}
        id="uncolabChat_tabinputcontainer"
      >
        <div id="downplugins">
          <input
            id="uncolabChat_textarea"
            name="message"
            onChange={this.props.onChange}
            type="text"
            value={this.props.formValues.message}
            placeholder="Enter your help"
          />
          <FontAwesomeIcon className="btn_enter" icon="angle-double-right" />
        </div>
      </form>
    );
  }
}

export default FormMessage;
