import React from "react";
import ActiveState from "../ActiveState/ActiveState";
import ThankYouState from "../ThankYouState/ThankYouState";
import './Container.sass';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {submittedRating: 0}
  }

  wasRatingSubmitted() {
    return this.state.submittedRating !== 0;
  }

  handleRateSubmit(rate) {
    this.setState({submittedRating: rate});
  }

  render() {
    return (
      <div className="main-container">
        {
          !this.wasRatingSubmitted()
            ? <ActiveState onRateSubmit={(rate) => this.handleRateSubmit(rate)}/>
            : <ThankYouState rate={this.state.submittedRating} />
        }
      </div>
    )
  }
}

export default Container;