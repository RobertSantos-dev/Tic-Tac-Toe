import { useContext } from 'react';
import ContextApi from '../../context/ContextApi';

export default function Round() {
  const { round, win, tie } = useContext(ContextApi);

  return(
    <section className='section-round'>
      { win === '' && !tie && <p><strong>{ round }°</strong> Partida</p> }
      { win !== '' && !tie && <p><strong>{ win }</strong> venceu</p> }
    </section>
  )
}