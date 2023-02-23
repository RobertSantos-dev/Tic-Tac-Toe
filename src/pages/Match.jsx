import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ContextApi from '../context/ContextApi';
import { Verify, Interations } from '../services/MatchService';
import Icons from '../components/matchComponents/Icons';
import Board from '../components/matchComponents/Board';
import ButtonNext from '../components/matchComponents/ButtonNext';
import '../styles/Match.css';

function Match() {
  const history = useHistory();
  const { inform, setUrl } = useContext(ContextApi);

  const [win, setWin] = useState('');
  const [tie, setTie] = useState(false);
  const [round, setRound] = useState(1);
  const [player, setPlayer] = useState('');
  const [spaces, setSpaces] = useState(['', '', '', '', '', '', '', '', '']);

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
      <Icons
        player={ player }
        inform={ inform }
      />
      <Board
        spaces={ spaces }
        win={ win }
        tie={ tie }
        interations={ interations }
        setPlayer={ setPlayer }
        setSpaces={ setSpaces }
      />
      <ButtonNext
        win={ win }
        tie={ tie }
        round={ round }
        inform={ inform }
        verify={ verify }
        interations={ interations }
        history={ history }
        setWin={ setWin }
        setTie={ setTie }
        setRound={ setRound }
        setSpaces={ setSpaces }
        setPlayer={ setPlayer }
      />
    </main>
  )
}

export default Match;