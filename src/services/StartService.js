export default class StartService {
  formValid(inform, history, setUrl) {
    const { playerOne, playerTwo, rounds } = inform;
    const cond = [
      playerOne.length > 3,
      playerTwo.length > 3,
      rounds > 0,
      rounds < 11,
    ];
    
    if (cond.every((e) => e)) {
      history.push('/match');
      setUrl('/match');
    }
  }
}