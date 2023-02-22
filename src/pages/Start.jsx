import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ContextApi from '../context/ContextApi';
import FormStart from '../components/FormStart';
import '../styles/Start.css';

function Start() {
  const { location: { pathname } } = useHistory();
  const { setUrl } = useContext(ContextApi);
  const [isForm, setIsForm] = useState(false);

  useEffect(() => { setUrl(pathname); }, []);

  return (
    <section className='section-start'>
      { !isForm &&
          <button
            className='btn-start'
            onClick={ () => setIsForm(true) }
          >
            Começar
          </button>}

      { isForm && <FormStart /> }
    </section>
  );
}

export default Start;