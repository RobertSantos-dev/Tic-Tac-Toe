import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContextApi from './ContextApi';

function Provider({ children }) {
  const history = useHistory();
  
  const [url, setUrl] = useState('');
  const [win, setWin] = useState('');
  const [tie, setTie] = useState(false);
  const [round, setRound] = useState(1);
  const [player, setPlayer] = useState('');
  const [spaces, setSpaces] = useState(['', '', '', '', '', '', '', '', '']);
  const [inform, setInform] = useState({
    playerOne: '', playerTwo: '', rounds: 0
  });

  const context = {
    history, inform, player, round, spaces, tie, url, win,
    setInform, setPlayer, setRound, setSpaces, setTie, setUrl, setWin,
  };

  return (
    <ContextApi.Provider value={ context }>
      { children }
    </ContextApi.Provider>
  );
}

// Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;