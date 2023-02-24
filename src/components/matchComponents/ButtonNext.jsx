import { useContext } from 'react';
import ContextApi from '../../context/ContextApi';

import Button from '../all/Button';

export default function ButtonNext({ verify, interations }) {
  const {
    win, tie, round, inform, history,
    setWin, setTie, setRound, setSpaces, setPlayer
  } = useContext(ContextApi);

  return (
    <section className='section-btn-next'>
      { win !== '' && round <= inform.rounds
          ? ( <Button
              name='btn-next'
              click={ () => { verify.verifyRounds(
                  setRound,
                  setSpaces,
                  setWin,
                  setPlayer
                );
                setTie(false);
                setPlayer(interations.startPlayer());
              }}
              text='Proximo'
            /> )
          : '' }
      { tie && round <= inform.rounds
          ? ( <Button
              name='btn-next'
              click={ () => {
                verify.reset(setSpaces, setWin, setPlayer);
                setTie(false);
                setPlayer(interations.startPlayer());
              }}
              text='Reiniciar'
            /> )
          : '' }
      { round > inform.rounds
          ? ( <Button
              name='btn-next'
              click={ () => {
                verify.reset(setSpaces, setWin, setPlayer);
                setTie(false);
                history.push('/');
              }}
              text='Finalizar'
            /> )
          : '' }
    </section>
  )
}