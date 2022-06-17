import React from "react";
import ActiveState from "./Components/ActiveState/ActiveState";
import ThankYouState from "./Components/ThankYouState/ThankYouState";
import './App.sass';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {submittedRate: 0, wasSubmitted: false}
  }

  handleRateSubmit(rate) {
    this.setState({submittedRate: rate, wasSubmitted: true});
  }

  render() {
    return (
      <div className="main-container">
        {
          !this.state.wasSubmitted
            ? <ActiveState onRateSubmit={(rate) => this.handleRateSubmit(rate)}/>
            : <ThankYouState rate={this.state.submittedRate} />
        }
      </div>
    )
  }
}

export default App;
