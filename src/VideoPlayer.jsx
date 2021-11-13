import { Card } from "react-onsenui";
import React from "react";
import { hot } from "react-hot-loader/root";
import axios from "axios";

class VideoPlayer extends React.Component {
  render() {
    const { src, title } = this.props;
    return (
      <>
        <video controls width="100%" height="100%">
          <source src={src} type="video/mp4" />
        </video>
        <Card>
          <div className="title">{title}</div>
          <div className="content">No description yet</div>
        </Card>
      </>
    );
  }
}

export default hot(VideoPlayer);
