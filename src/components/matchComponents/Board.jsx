export default function Board({ spaces, win, interations, setPlayer, setSpaces }) {
  return (
    <section className='match'>
      { spaces.map((e, i) => (
        <button
          key={ i }
          data-i={ i }
          disabled={ win !== '' && true }
          className={`btn-board ${ e === 'X' ? 'btn-board-x' : 'btn-board-o' }`}
          onClick={ (e) => interations.clicks(e, setPlayer, setSpaces) }
        >
          { e }
        </button>
      )) }
    </section>
  );
}