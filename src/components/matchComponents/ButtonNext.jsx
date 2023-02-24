import { useContext } from 'react';
import ContextApi from '../../context/ContextApi';

import Button from '../all/Button';

export default function ButtonNext({ verify, interations }) {
  const {
    win, tie, round, inform, history,
    setWin, setTie, setRound, setSpaces, setPlayer, setInform
  } = useContext(ContextApi);

  return (
    <section className='section-btn-next'>
      { win !== '' && round < Number(inform.rounds)
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
      { tie
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
      { round === Number(inform.rounds) && win !== '' && !tie
          ? ( <Button
              name='btn-next'
              click={ () => {
                verify.reset(setSpaces, setWin, setPlayer);
                verify.resetInform(setInform);
                setRound(1);
                setTie(false);
                history.push('/');
              }}
              text='Finalizar'
            /> )
          : '' }
    </section>
  )
}