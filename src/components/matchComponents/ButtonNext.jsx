import Button from '../all/Button';

export default function ButtonNext(props) {
  return (
    <section>
      { props.win !== '' && props.round <= props.inform.rounds
          ? ( <Button
              name='btn-next'
              click={ () => { props.verify.verifyRounds(
                  props.setRound,
                  props.setSpaces,
                  props.setWin,
                  props.setPlayer
                );
                props.setTie(false);
                props.setPlayer(props.interations.startPlayer());
              }}
              text='Proximo'
            /> )
          : '' }
      { props.tie && props.round <= props.inform.rounds
          ? ( <Button
              name='btn-next'
              click={ () => {
                props.verify.reset(props.setSpaces, props.setWin, props.setPlayer);
                props.setTie(false);
                props.setPlayer(props.interations.startPlayer());
              }}
              text='Reiniciar'
            /> )
          : '' }
      { props.round > props.inform.rounds
          ? ( <Button
              name='btn-next'
              click={ () => {
                props.verify.reset(props.setSpaces, props.setWin, props.setPlayer);
                props.setTie(false);
                props.history.push('/');
              }}
              text='Finalizar'
            /> )
          : '' }
    </section>
  )
}