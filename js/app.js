const team = {
  _players: [
    {
      firstName: 'Pepe',
      lastName: 'Hands',
      age: 69
    }, {
      firstName: 'Jack',
      lastName: 'Mehof',
      age: 23
    }, {
      firstName: 'Tigo',
      lastName: 'Bitties',
      age: 34
    }
  ],
  _games: [
    {
      opponent: 'Billy Winters',
      teamPoints: 109,
      opponentPoints: 100
    }, {
      opponent: 'Peggy Paynot',
      teamPoints: 10,
      opponentPoints: 14
    }, {
      opponent: 'Jager Miester ',
      teamPoints: 76,
      opponentPoints: 75
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
   this.players.push(player);

  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentsPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);
