import { useState } from 'react';
import ContextApi from './ContextApi';

function Provider({ children }) {
  const [inform, setInform] = useState({
    playerOne: '', playerTwo: '', rounds: 0
  });
  const [url, setUrl] = useState('');

  const context = {
    inform,
    setInform,
    url,
    setUrl
  };

  return (
    <ContextApi.Provider value={ context }>
      { children }
    </ContextApi.Provider>
  );
}

// Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;