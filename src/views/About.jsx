import { ListHeader, ListItem, List } from "react-onsenui";
import React from "react";
import { hot } from "react-hot-loader/root";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: "android",
    };
  }

  render() {
    return (
      <List>
        <ListHeader>Über diese App</ListHeader>
        <ListItem>
          <div className="center">2021 &copy; Jimmy B.</div>
        </ListItem>

        <ListHeader>GitHub</ListHeader>
        <ListItem
          modifier="chevron"
          tappable
          onClick={() => {
            window.open(
              "https://github.com/DerGoogler/dergoogler.github.io/issues/new"
            );
          }}
        >
          <div className="center">Submit Issue</div>
        </ListItem>

        <ListHeader>Framework</ListHeader>
        <ListItem
          modifier="chevron"
          tappable
          onClick={() => {
            window.open("https://reactjs.org/blog/2020/10/20/react-v17.html");
          }}
        >
          <div className="center">React 17 + Hot Loader</div>
        </ListItem>
        <ListItem
          modifier="chevron"
          tappable
          onClick={() => {
            window.open("https://onsen.io");
          }}
        >
          <div className="center">Onsen UI 2.11.2</div>
        </ListItem>
      </List>
    );
  }
}

export default hot(About);
