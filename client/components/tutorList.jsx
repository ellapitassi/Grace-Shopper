import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';
import { fetchTeachablesById } from '../store'

const Selection = (props) => {

       let teachables;
       if (props.teachables) {
            teachables = props.teachables
        } else {
            teachables = [{name: ''}];
        }

    return (<div>
     <select className="select-tutor">

        {
           teachables.map(ele => (
            <option value={ele.name} key={ele.id}>{ele.name + ' $' + ele.price + '.00'}</option>
            ))
        }
        </select>
    <button>
        Add To Cart
    </button>
</div>)
}

export class TutorList extends Component {
    //TODO: link to cart store. Add ratings
    addToCart(evt) {
        evt.preventDefault();
    }

    componentDidMount() {
        this.props.gettingTutors();
    }

    render() {

        console.log('--->>state', this.props)

        const isLoggedIn = this.props.isLoggedIn;
        let tutors = [];
        if (this.props.tutors) {
            tutors = this.props.tutors
        // } else {
        //     tutors = [];
        }

        return (
            <div>
                <h2 align="center">Tutors</h2>
                <div className="viewTutors">
                {
                    tutors.map(tutor => (
                        <div className="tutorProfile" key={tutor.id}>

                            <h5>{tutor.name}</h5>
                            <Link to={`/tutors/${tutor.id}`}>
                            <img src={tutor.img} className="profileImg" />
                            </Link>

                            <p>Rating TBD</p>

                            {isLoggedIn ?
                                    <Selection teachables={tutor.teachables} />
                            : ''}
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('--->>state', state)
         return {
        tutors: state.tutors,
    }
}

export default connect(mapStateToProps, /*mapDispatchToProps*/)(TutorList);
