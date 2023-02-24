import { useEffect, useContext } from 'react';
import ContextApi from '../context/ContextApi';

import Icons from '../components/matchComponents/Icons';
import Board from '../components/matchComponents/Board';
import ButtonNext from '../components/matchComponents/ButtonNext';

import { Verify, Interations } from '../services/MatchService';
import '../styles/Match.css';

export default function Match() {
  const {
    inform, player, history, spaces,
    setUrl, setTie, setWin, setPlayer,
  } = useContext(ContextApi);

  const verify = new Verify();
  const interations = new Interations();

  useEffect(() => {
    if(inform.playerOne === '' || inform.playerTwo === '') {
      setUrl('/');
      history.push('/');
    } else {
      setPlayer(interations.startPlayer());
    }
  }, []);

  useEffect(() => {
    const resultWin = verify.verifyWins(spaces);
    const resultTie = verify.verifyTie(spaces);

    if (resultWin.length === 0 && resultTie) setTie(true);
    if (resultWin.length > 0) verify.verifyMatch(setWin, player, inform);
  }, [spaces]);

  return (
    <main>
      <Icons />
      <Board interations={ interations } />
      <ButtonNext verify={ verify } interations={ interations } />
    </main>
  )
}