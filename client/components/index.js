/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export { Login, Signup } from './auth-form'
export { default as Cart } from './cart'
// export { singleTutor } from './singleTutor.jsx'
//export { TutorList } from './tutorList.jsx'

// this is from tutorlist
// <Route exact path="/hello" render={() => (<h1>Hello </h1>)} />
