import React from "react";
import {ReactComponent as StarIcon} from '../../Assets/icon-star.svg';
import './ActiveState.sass';

const possibleRatings = [
    1,
    2,
    3,
    4,
    5
];

class ActiveState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedRating: 0};
    }

    ratingsList() {
        const ratings = possibleRatings.map((rating) =>
            <button key={rating} className={`rate-button ${this.fulfillActiveClass(rating)}`} onClick={() => this.updateSelectedRate(rating)}>{rating}</button>
        );

        return <div className='rate-list'>{ratings}</div>;
    }

    fulfillActiveClass(currentRate) {
        return currentRate === this.state.selectedRating ? 'active' : '';
    }

    updateSelectedRate(rate) {
        this.setState({selectedRating: rate});
    }

    onRateSubmit() {
        this.props.onRateSubmit(this.state.selectedRating);
    }

    render() {
        return (
            <div>
                <div className='around-star'><StarIcon /></div>

                <h1 className='title'>How did we do?</h1>

                <span className='subtitle'>Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!</span>

                { this.ratingsList() }

                <button className='submit-button' onClick={() => this.onRateSubmit()}>Submit</button>
            </div>
        );
    }
}

export default ActiveState;