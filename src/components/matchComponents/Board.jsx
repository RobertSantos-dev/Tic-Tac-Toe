import { useContext } from 'react';
import ContextApi from '../../context/ContextApi';

export default function Board({ interations }) {
  const { spaces, win, tie, setPlayer, setSpaces } = useContext(ContextApi);

  return (
    <section className='match'>
      { spaces.map((e, i) => (
        <button
          key={ i }
          data-i={ i }
          disabled={ win !== '' || tie ? true : false }
          className={`btn-board ${ e === 'X' ? 'btn-board-x' : 'btn-board-o' }`}
          onClick={ (e) => interations.clicks(e, setPlayer, setSpaces) }
        >
          { e }
        </button>
      )) }
    </section>
  );
}