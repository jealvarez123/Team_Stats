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
  }
};

console.log(team.players)
