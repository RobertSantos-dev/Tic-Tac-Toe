import { useContext } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import ContextApi from '../../context/ContextApi';

export default function Icons() {
  const { player, inform } = useContext(ContextApi);

  return (
    <section className='section-icons'>
      <div className={ `icon1 ${player === 'X' ? 'event1' : ''}` }>
        <BsPersonFill />
        <p
          id='p-player-id-1'
          className={`p-player ${player === 'X' ? 'p-player-x' : ''}`}
        >
         X
        </p>
        {' '}
        <p className='p-name'>{ inform.playerOne }</p>
      </div>
      <div className={ `icon2 ${player === 'O' ? 'event2' : ''}` }>
        <BsPersonFill />
        <p
          id='p-player-id-2'
          className={`p-player ${player === 'O' ? 'p-player-o' : ''}`}
        >
          O
        </p>
        {' '}
        <p className='p-name'>{ inform.playerTwo }</p>
      </div>
    </section>
  );
}