import { useContext } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import ContextApi from '../../context/ContextApi';

export default function Icons() {
  const { player, inform } = useContext(ContextApi);

  return (
    <section className='section-icons'>
      <div className={ `icon1 ${player === 'X' ? 'event1' : ''}` }>
        <BsPersonFill />
        <p>{ inform.playerOne }</p>
      </div>
      <div className={ `icon2 ${player === 'O' ? 'event2' : ''}` }>
        <BsPersonFill />
        <p>{ inform.playerTwo }</p>
      </div>
    </section>
  );
}