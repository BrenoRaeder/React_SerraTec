import React from 'react';
import Card from './Components/Card/Card';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import './global.css';

class App extends React.Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const newUsers = await fetch("https://api.github.com/users");
    const usersJson = await newUsers.json();

    this.setState({users: usersJson});
  }

  render() {

    return (
      <div className='container-app'>
        <h1>Aula 3</h1>
        <ClassComponent />
        <div className="container-users">
          {this.state.users.map(user => {
            return (
            <Card name={user.login} img={user.avatar_url}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
