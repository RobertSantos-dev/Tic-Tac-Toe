import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ContextApi from '../context/ContextApi';

import FormStart from '../components/startComponents/FormStart';
import RequirementsStart from '../components/startComponents/RequirementsStart';
import Button from '../components/all/Button';

import '../styles/startStyles/Start.css';
import '../styles/startStyles/StartMobile.css';

function Start() {
  const { location: { pathname } } = useHistory();
  const { setUrl } = useContext(ContextApi);
  const [isForm, setIsForm] = useState(false);

  useEffect(() => { setUrl(pathname); }, []);

  return (
    <section className='section-start'>
      { !isForm
        && (
          <Button
            name='btn-start'
            click={ () => setIsForm(true) }
            text='Começar'
          />
      )}
      { isForm && (
        <>
          <RequirementsStart />
          <FormStart />
        </>
      )}
    </section>
  );
}

export default Start;