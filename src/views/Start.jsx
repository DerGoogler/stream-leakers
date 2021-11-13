import { Button, List, ListItem, SearchInput } from "react-onsenui";
import ReactDOM from "react-dom";
import React from "react";
import { hot } from "react-hot-loader/root";
import axios from "axios";
import VideoPlayer from "../VideoPlayer";
import config from "./../config";

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("/assets/stream-leakers.json").then((res) => {
      var data = res.data;
      this.setState({ data: data });
    });
  }

  render() {
    return (
      <>
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
              {this.state.data.map((p) => (
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
                          window.open(config.baseUrl + p.link);
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
                          var mountNode = document.getElementById("app");
                          ReactDOM.render(
                            <VideoPlayer
                              src={config.baseUrl + p.link}
                              title={p.title}
                            />,
                            mountNode
                          );
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
      </>
    );
  }
}

export default hot(Start);
