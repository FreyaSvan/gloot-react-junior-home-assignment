import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { getGames, deleteGame, editGame, addGame } from './game-service';

class App extends React.Component {
  state = {
    games: [],
    newName: ''
  };

  componentDidMount = async () => {
    this.getGames();
  };

  getGames = async () => {
    const games = await getGames();
    this.setState({ games });
  }

  addGame = async () => {
    await addGame(this.state.newName);
    this.getGames();
  };

  deleteGame = async id => {
    await deleteGame(id);
    this.getGames();
  };

  editGame = async (name, id) => {
    await editGame(name, id);
    this.getGames();
  };

  handleChange = event => {
    this.setState({
      newName: event.target.value
    });
  };

  handleNameChange = (event, index) => {
    let games = [...this.state.games];
    games[index].name = event.target.value;
    this.setState({ games });
  };

   getFocus = () => {
    document.getElementById("editInput").focus();
  }


  render() {
    const { games } = this.state;
    return (
      <div className="container">
        <h1>Game Library</h1>
          <div className="add-game">
            <input
                className="add-input"
                type="text"
                placeholder="Add New Game"
                name="name" value={this.state.newName}
                onChange={this.handleChange}
                />
            <button className="new-game-button" onClick={this.addGame}>add</button>
          </div>
          <div className="list-container">
            <div className="list-header">
              <h3>Games</h3>
              <h3>Id</h3>
            </div>
          {games &&
            games.map((game, index) => (
            <div className="list-item" key={game.id}>
              <input
                type="text"
                placeholder={game.name}
                name="name"
                value={game.name}
                onChange={(event) => this.handleNameChange(event, index)}
                id="editInput"
              />
              <p>{game.id}</p>
              <div className="button-group">
                <button onClick={() => this.editGame(game.id, game.name)}>edit</button>
                <button style={{marginRight: "0px"}} onClick={() => this.deleteGame(game.id)}>delete</button>
              </div>
          </div>
                ))}
          </div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-container'));
