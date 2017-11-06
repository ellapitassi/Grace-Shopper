import React, {Component} from 'react'
import { connect } from 'react-redux'

const Selection = (props) => {
    console.log("props for selcetion---->", props.teachables.length)
    return (<div>
    <select>
        <option value={props.teachables[0].name}>{props.teachables[0].name}</option>
    </select>
    <button>
        Add To Cart
    </button>
</div>)
}

export class TutorList extends Component {

    addToCart(evt) {
        evt.preventDefault();
    }

    componentDidMount() {
        const gettingTutors = this.props.gettingTutors();
        const gettingTeachables = this.props.gettingTeachables()
    }
    
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        let tutors;
        if (this.props.tutors) {
            tutors = this.props.tutors
        } else {
            tutors = [];
        }

        let teachables;
        if (this.props.teachables) {
            teachables = this.props.teachables
        } else {
            teachables = [{name: ''}];
        }

        // test teachables 
        console.log("gettingteachable---->", this.props.teachables)
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
                            <Selection teachables={teachables} />
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
        tutors: state.tutors,
        teachables: state.teachables
    }
}

export default connect(mapStateToProps, /*mapDispatchToProps*/)(TutorList);
