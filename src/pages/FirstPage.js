import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from 'actions/user'
import { Link } from 'react-router-dom'
// import './FirstPage.css'
// import { getSectionsDB } from 'shared/Firebase'

class FirstPage extends Component {
  render() {
	const {
		memo
	} = this.props;
	// console.log(memo);
    // const b64 = this.props.staticContext ? 'wait for it' : window.btoa('wait for it')
    return (
      <div>
        <h1>Schedule</h1>
		{memo.length ? (
			<p>{memo[0].title}</p>
		) : (
			<p className="loading"></p>
		)}
		
		
        <Link to={'/second'}>Second</Link>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   user: state.user
// })

// const mapDispatchToProps = dispatch => ({
//   userActions: bindActionCreators(userActions, dispatch)
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FirstPage)

export default FirstPage