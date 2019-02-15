import * as React from "react";

class App extends React.Component<any, any> {
  render() {
    const user: string = "World";

    return (
      <div>
        Hello {user}
        <div>
          To learn more about using TypeScript wuth React, visit{" "}
          <a href="https://charleslbryant.gitbooks.io/hello-react-and-typescript/content/index.html">
            this link
          </a>
        </div>
      </div>
    );
  }
}

export default App;
