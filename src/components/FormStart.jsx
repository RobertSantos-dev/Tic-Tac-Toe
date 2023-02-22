import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ContextApi from '../context/ContextApi';
import StartService from '../services/StartService';

function FormStart() {
  const history = useHistory();
  const { inform, setInform, setUrl } = useContext(ContextApi);
  const change = ({ target: { name, value } }) => {
    setInform((state) => ({ ...state, [name]: value }))
  }

  const service = new StartService();

  return (
    <form>
      <fieldset>
        <label htmlFor='playerOneId'>
          Jogador 1:
          {' '}
          <input
            type='text'
            id='playerOneId'
            name='playerOne'
            maxLength='12'
            minLength='3'
            required
            onChange={ change }
            value={ inform.playerOne }
          />
        </label>
        <label htmlFor='playerTwoId'>
          Jogador 2:
          {' '}
          <input
            type='text'
            id='playerTwoId'
            name='playerTwo'
            maxLength='12'
            minLength='3'
            required
            onChange={ change }
            value={ inform.playerTwo }
          />
        </label>
        <label htmlFor='roundsId'>
          Rodadas:
          {' '}
          <input
            type='number'
            id='roundsId'
            name='rounds'
            max='10'
            min='1'
            required
            onChange={ change }
            value={ inform.rounds }
          />
        </label>
      </fieldset>
      <fieldset>
        <button
          className='btn-start-form'
          onClick={ () => { service.formValid(inform, history, setUrl) } }
        >
          Iniciar
        </button>
      </fieldset>
    </form>
  );
}

export default FormStart;