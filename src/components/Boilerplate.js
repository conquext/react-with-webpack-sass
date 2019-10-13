import React from "react";
import Header from "./Header";

export default class Boilerplate extends React.Component {
  state = {
    title: "Show Subtitle",
    showSubtitle: undefined,
    subtitle: "Hi there"
  };
  handleToggleSubtitle = () => {
    this.setState(previousState => ({
      showSubtitle: !previousState.showSubtitle
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    let title;
    this.state.showSubtitle
      ? (title = "Hide Subtitle")
      : (title = "Show Subtitle");

    if (prevState.title !== title) {
      this.setState(() => ({ title }));
    }
  }

  render() {
    const { title, subtitle, showSubtitle } = this.state;
    return (
      <div>
        <Header
          className="header"
          title={title}
          showSubtitle={showSubtitle}
          subtitle={subtitle}
          handleToggleSubtitle={this.handleToggleSubtitle}
        />
        <div className="container">
          <p>To show or not to show, that is the question</p>
        </div>
      </div>
    );
  }
}
