import React, {Component} from 'react'
import { connect } from 'react-redux'
import fetchTutors from '../store/tutors'

const Selection = () => (<div>
    <select>
        <option value="skill to be taught">Skill To Be Taught</option>
    </select>
    <button>
        Add To Cart
    </button>
</div>)

export class TutorList extends Component {

    addToCart(evt) {
        evt.preventDefault();
    }

    componentDidMount() {
        const gettingTutors = this.props.gettingTutors();
    }
    
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        let tutors;
        if (this.props.tutors) {
            tutors = this.props.tutors
        } else {
            tutors = [];
        }

        return (
            <div>
                <h1>Tutors:</h1>
                <div className="viewTutors">
                {
                    tutors.map(tutor => (
                        <div className="tutorProfile" key={tutor.id}>
                            <h5>{tutor.name}</h5>
                            <img src={tutor.img} className="profileImg" />
                            <p>Price TBD</p>
                            <p>Rating TBD</p>
                            {isLoggedIn ?
                            <Selection />
                            : ''}
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tutors: state.tutors
    }
}

export default connect(mapStateToProps, /*mapDispatchToProps*/)(TutorList);
