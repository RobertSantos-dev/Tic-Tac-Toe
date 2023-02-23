import { useContext } from 'react';

import ContextApi from '../../context/ContextApi';
import '../../styles/Header.css';

function Header() {
  const { url } = useContext(ContextApi);

  return (
    <header>
      <h1 className={`${ url === '/' ? 'h1-menu' : 'h1-match'}`}>
        Tic Tac Toe
      </h1>
    </header>
  )
}

export default Header;