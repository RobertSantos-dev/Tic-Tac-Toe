export default function Board(props) {
  return (
    <section className='match'>
      { props.spaces.map((e, i) => (
        <button
          key={ i }
          data-i={ i }
          disabled={ props.win !== '' || props.tie ? true : false }
          className={`btn-board ${ e === 'X' ? 'btn-board-x' : 'btn-board-o' }`}
          onClick={ (e) => props.interations.clicks(e, props.setPlayer, props.setSpaces) }
        >
          { e }
        </button>
      )) }
    </section>
  );
}