import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// import FirstPage from './FirstPage'
// import SecondPage from './SecondPage'
import { FirstPage, SecondPage } from 'pages'
import NoMatch from 'components/NoMatch'
import { fire, getFireDB } from 'shared/Firebase'

export default class App extends Component {
  constructor() {
      super();
      this.state = {
        memo: []
      };
      fire();
  }

  componentDidMount() {
    getFireDB()
    .then(res =>{
      this.setState({
        memo : res.val().memos
      })
    });
  }
  
  render(){
    const {
      memo
    } = this.state;
    
    return (
      <div>
        <Switch>
          {/* <Route exact path="/" component={FirstPage} memo={memo}/> */}
          <Route exact path="/" render={()=><FirstPage memo={memo}/>}/>
          <Route path="/second" component={SecondPage}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
