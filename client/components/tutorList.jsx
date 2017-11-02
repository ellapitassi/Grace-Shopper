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
    
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        const tutors = this.props.tutors;

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

const tutors =  [
    {
        name: 'Guang Zhu',
        img: '/images/guang.jpg',
        email: 'bha.guang@gmail.com',
        password: 'abc123',
        rating: '5'
    },
    {
        name: "Ella Pitassi",
        img: '/images/ella.jpg',
        email: "ellapitassi23@gmail.com",
        password: "abc123",
        rating: "5"   
    },
    {
        name: "Anule Ndukwu",
        img: '/images/anule.jpg',
        email: "anule@gmail.com",
        password: "abc123",
        rating: "4"
    },
    {
        name: "April Rueb",
        img: '/images/april.jpg',
        email: "april@gmail.com",
        password: "abc123",
        rating: "4"
    },
    {
        name: "Arianna Lanz",
        img: '/images/arianna.jpg',
        email: "arianna@gmail.com",
        password: "abc123",
        rating: "4"
    },
    {
        name: "Ashi",
        img: '/images/ashi.jpg',
        email: "ashi@gmail.com",
        password: "abc123",
        rating: "4"
    },
    {
        name: "Emily Intersimone",
        img: '/images/emilyi.jpg',
        email: "emilyi@gmail.com",
        password: "abc123",
        rating: "4"
    },
    {
        name: "Blanca Sanchez",
        img: '/images/blanca.jpg',
        email: "blanca@gmail.com",
        password: "abc123",
        rating: "4"
    },
    {
        name: "Cara Lang",
        img: '/images/cara.jpg',
        email: "cara@gmail.com",
        password: "abc123",
        rating: "4"
    }
]


const mapStateToProps = state => {
    return {
        tutors: tutors //state.tutors
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        getAllTutorsMethod: function() {
            dispatch(fetchTutors())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorList);
