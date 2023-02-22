import { useState, useEffect, useContext } from 'react';

import ContextApi from '../context/ContextApi';
import { Verify, Interations } from '../services/MatchService';
import Icons from '../components/matchComponents/Icons';
import Board from '../components/matchComponents/Board';
import ButtonNext from '../components/matchComponents/ButtonNext';
import '../styles/Match.css';

function Match() {
  const { inform } = useContext(ContextApi);
  const [spaces, setSpaces] = useState(['', '', '', '', '', '', '', '', '']);
  const [round, setRound] = useState(1);
  const [win, setWin] = useState('');
  const [player, setPlayer] = useState('X');

  const verify = new Verify();
  const interations = new Interations();

  useEffect(() => {
    const result = verify.verifyWins(spaces);

    if (result.length > 0) verify.verifyMatch(setWin, player, inform);
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
        interations={ interations }
        setPlayer={ setPlayer }
        setSpaces={ setSpaces }
      />
      <ButtonNext
        win={ win }
        round={ round }
        inform={ inform }
        verify={ verify }
        setRound={ setRound }
        setSpaces={ setSpaces }
        setWin={ setWin }
        setPlayer={ setPlayer }
      />
    </main>
  )
}

export default Match;