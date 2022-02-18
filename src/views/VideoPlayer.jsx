import React from "react";
import { Page, BackButton, Toolbar } from "react-onsenui";

class VideoPlayer extends React.Component {
  renderToolbar = () => {
    const { title, popPage } = this.props;
    return (
      <Toolbar>
        <div className="left">
          <BackButton onClick={popPage} />
        </div>
        <div className="center">{title}</div>
      </Toolbar>
    );
  };

  render = () => {
    const { src } = this.props;
    return (
      <Page renderToolbar={this.renderToolbar}>
        <video controls width="100%" height="100%">
          <source src={src} type="video/mp4" />
        </video>
      </Page>
    );
  };
}

export default VideoPlayer;
