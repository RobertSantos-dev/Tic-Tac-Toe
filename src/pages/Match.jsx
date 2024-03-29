import { useEffect, useContext } from 'react';
import ContextApi from '../context/ContextApi';

import Icons from '../components/matchComponents/Icons';
import Board from '../components/matchComponents/Board';
import ButtonNext from '../components/matchComponents/ButtonNext';
import Round from '../components/matchComponents/Round';

import { Verify, Interations } from '../services/MatchService';
import '../styles/matchStyles/Match.css';
import '../styles/matchStyles/MatchMobile.css';

export default function Match() {
  const {
    inform, player, history, spaces, round,
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
      <Round />
      <ButtonNext verify={ verify } interations={ interations } />
    </main>
  )
}