import React, {Component} from 'react'
import { connect } from 'react-redux'

const Selection = (props) => {
    //console.log("props for selcetion---->", props.teachables.length)
    return (<div>
     <select className="select-tutor">
        {
        props.teachables.map(ele => (
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
        this.props.gettingTeachables()
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

        //console.log("gettingteachable---->", this.props.teachables)
        return (
            <div>
                <h1>Tutors:</h1>
                <div className="viewTutors">
                {
                    tutors.map(tutor => (
                        <div className="tutorProfile" key={tutor.id}>
                            <h5>{tutor.name}</h5>
                            <img src={tutor.img} className="profileImg" />
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
