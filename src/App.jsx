import { Page, Toolbar, Button, List, ListItem, SearchInput } from "react-onsenui";
import React from "react";
import axios from "axios";
import VideoPlayer from "./views/VideoPlayer";
import yaml from "js-yaml";

class App extends React.Component {
  state = {
    config: {},
    video: [],
  };

  get = (url, callback) => {
    axios.get(`/assets/stream-leakers/${url}`).then((res) => {
      const data = res.data;
      const parse = yaml.load(data, { json: true });
      if (typeof callback == "function") {
        callback(parse);
      }
    });
  };

  componentDidMount = () => {
    // Get all indexed videos
    this.get("video.yaml", (parse) => {
      this.setState({ video: parse });
    });

    // Configuration
    this.get("config.yaml", (parse) => {
      this.setState({ config: parse });
    });
  };

  renderToolbar = () => {
    return (
      <Toolbar>
        <div className="center">Stream Leakers</div>
      </Toolbar>
    );
  };

  render = () => {
    const { video, config } = this.state;
    const { pushPage } = this.props;
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div>
          <div>
            <SearchInput
              style={{ width: "100%" }}
              placeholder="Suchen"
              onChange={(event) => {
                var input, filter, ul, li, a, i, txtValue;
                input = event.target;
                filter = input.value.toUpperCase();
                ul = document.getElementById("sl");
                li = ul.getElementsByTagName("ons-list-item");
                for (i = 0; i < li.length; i++) {
                  a = li[i].getElementsByTagName("span")[0];
                  txtValue = a.textContent || a.innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                  } else {
                    li[i].style.display = "none";
                  }
                }
              }}
            />
          </div>

          <div id="sl">
            <List>
              {video.map((p) => (
                <>
                  <ListItem expandable modifier="nodivider">
                    <span>{p.title}</span>
                    <div className="expandable-content">
                      <Button
                        style={{
                          marginTop: "4px",
                          marginBottom: "4px",
                        }}
                        modifier="large"
                        onClick={() => {
                          window.open(config.baseURL + p.link);
                        }}
                        disabled={true}
                      >
                        Download Video
                      </Button>
                      <Button
                        style={{
                          marginTop: "4px",
                          marginBottom: "4px",
                        }}
                        modifier="large"
                        onClick={() => {
                          pushPage({
                            component: VideoPlayer,
                            key: "player",
                            src: config.baseURL + p.link,
                            title: p.title,
                          });
                        }}
                      >
                        Play Video
                      </Button>
                    </div>
                  </ListItem>
                </>
              ))}
            </List>
          </div>
        </div>
      </Page>
    );
  };
}

export default App;
