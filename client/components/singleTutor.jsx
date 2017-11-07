import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tutorInfo } from '../store/tutors'

class singleTutor extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const tutorId = this.props.match.params.userId;
        this.props.loadTutor(tutorId)
        console.log("TUTORID: ",tutorId)
    }

    render() {
        const tutor = this.props.tutor
        return (
            <div>
                {!tutor ?
                    <div>Loading...</div>
                    : <div>
                        <h1>Single Tutor</h1>
                        <h5>{tutor.name}</h5>
                        <img src={tutor.img} className="profileImg" />
                        <p>Rating TBD</p>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tutor: state.tutors.tutor
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadTutor: function (tutorId) {
            dispatch(tutorInfo(tutorId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(singleTutor)