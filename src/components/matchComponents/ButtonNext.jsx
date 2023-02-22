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
                )
              }}
              text='Proximo'
            /> )
          : '' }
    </section>
  )
}