import React from "react";
import $ from "jquery";
const DataContext = React.createContext();
const { Provider, Consumer } = DataContext;

class DataContextProvider extends React.Component {
  state = {
    programmer: null,
    getDataContext: this.getData.bind(this),
    contador: 0,
  };

  getData() {
    setInterval(() => {
      this.getDataContext();
      this.setState({ programmer: this.state.programmer });
    }, 5000);
  }

  async getDataContext() {
    try {
      let url =
        "/plugins/un_colab/api/score_task_user?" +
        $.param({
          course_id: $("#un-colab-root").attr("group"),
          task_id: $("#un-colab-root").attr("task"),
        });
      let taskStatusUser = await fetch(url);
      let data = await taskStatusUser.json();
      this.setState({ programmer: data.programmer });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export default DataContext;
export { DataContextProvider, Consumer as DataContextConsumer };
