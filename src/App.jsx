import {
  Page,
  Toolbar,
  Tabbar,
  Tab,
  SpeedDial,
  Fab,
  SpeedDialItem,
  Icon,
} from "react-onsenui";
import React from "react";
import { hot } from "react-hot-loader/root";
import Start from "./views/Start";
import About from "./views/About";
import config from "./config";

class PageContent extends React.Component {
  render() {
    return (
      <Page>
        <section>{this.props.content}</section>
      </Page>
    );
  }
}

class App extends React.Component {
  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">{config.title}</div>
      </Toolbar>
    );
  }

  renderTabs() {
    return [
      {
        content: <PageContent content={<Start />} />,
        tab: <Tab label="Start" icon="md-home" />,
      },
      {
        content: <PageContent content={<About />} />,
        tab: <Tab label="Über" icon="md-settings" />,
      },
    ];
  }

  renderFixed() {
    return (
      <SpeedDial position="bottom right">
        <Fab>
          <Icon className="ons-icon2" icon="md-share" />
        </Fab>
        <SpeedDialItem
          onClick={() => {
            window.open("https://github.com/DerGoogler/stream-leakers");
          }}
        >
          <Icon className="ons-icon2" icon="md-github" />
        </SpeedDialItem>
      </SpeedDial>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar} renderFixed={this.renderFixed}>
        <Tabbar
          swipeable={false}
          position="auto"
          renderTabs={this.renderTabs}
        />
      </Page>
    );
  }
}

export default hot(App);
