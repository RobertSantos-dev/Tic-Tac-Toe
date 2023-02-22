import { useState, useEffect, useContext } from 'react';

import ContextApi from '../context/ContextApi';
import { Verify, Interations } from '../services/MatchService';
import Icons from '../components/matchComponents/Icons';
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
      <Icons />
      <section className='match'>
      { spaces.map((e, i) => (
        <button
          key={ i }
          data-i={ i }
          disabled={ win !== '' && true }
          className={`btn-board ${ e === 'X' ? 'btn-board-x' : 'btn-board-o' }`}
          onClick={ (e) => interations.clicks(e, setPlayer, setSpaces) }
        >
          { e }
        </button>
      )) }
      </section>
      <section>
      {
        win !== '' && round <= inform.rounds
          ? (
            <button
              className='btn-next'
              onClick={
                () => verify.verifyRounds(setRound, setSpaces, setWin, setPlayer)
              }
            >
              Proximo
            </button>
          )
          : ''
      }
      </section>
    </main>
  )
}

export default Match;