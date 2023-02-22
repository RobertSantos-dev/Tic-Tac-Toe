export class MatchService {
  constructor() {
    this.positionsWins = [
      [0, 1, 2], [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]
    ];
  }

  verifyWins(match, player, setWin, inform) {
    const res = this.positionsWins.filter((e) => {
      const x = e.every((e2) => match[e2] === 'X');
      const o = e.every((e2) => match[e2] === 'O');
       return x || o;
    });

    if (res.length > 0) {
      setWin(
        `O vencedor é ${player !== 'X' ? inform.playerOne : inform.playerTwo}`);
    }
  }
  
  clicks(e, setPlayer, setSpaces) {
    const i = e.target.getAttribute('data-i');
    setPlayer((state) => {
      setSpaces((state2) => {
        state2[i] = state;
        return [...state2];
      });
      return state === 'X' ? 'O' : 'X';
    });
    e.target.disabled = true;
  }
}

export class MatchConfig {
  reset(setSpaces, setWin, setPlayer) {
    setSpaces(['', '', '', '', '', '', '', '', '']);
    setWin('');
    setPlayer('X');
  }
}