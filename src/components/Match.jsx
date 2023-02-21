import { useState, useEffect } from 'react';
import MatchService from '../services/MatchService';
import '../styles/Match.css';

function Match() {
  const [spaces, setSpaces] = useState(['', '', '', '', '', '', '', '', '']);
  const [win, setWin] = useState('');
  const [player, setPlayer] = useState('X');

  const functions = new MatchService();

  useEffect(() => {
    functions.verifyWins(spaces, player, setWin);
  }, [spaces]);

  return (
    <main>
      <section className='match'>
      { spaces.map((e, i) => (
        <button
          key={ i }
          data-i={ i }
          disabled={ win !== '' && true }
          className={`btn-board ${ e === 'X' ? 'btn-board-x' : 'btn-board-o' }`}
          onClick={ (e) => functions.clicks(e, setPlayer, setSpaces) }
        >
          { e }
        </button>
      )) }
      </section>
      <section>{ win !== '' && win }</section>
    </main>
  )
}

export default Match;