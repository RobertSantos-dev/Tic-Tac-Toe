export default function Button({ name, click, text }) {
  return (
    <button className={ name } onClick={ click }>
      { text }
    </button>
  );
}