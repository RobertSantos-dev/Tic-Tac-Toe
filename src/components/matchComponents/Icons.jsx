import { BsPersonFill } from 'react-icons/bs';

export default function Icons({ player, inform }) {
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