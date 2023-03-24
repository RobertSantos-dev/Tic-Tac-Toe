export default function RequirementsStart() {
  return (
    <section className='requirements'>
      <div>
        <details>
          <summary>Requisitos para iniciar o jogar</summary>
          <br />
          <ul>
            <li>
              <strong>JOGADORES:</strong>
              {' '}
              Precisam ter mais de 3 caracteres
            </li>
            <li>
              <strong>RODADAS:</strong>
              {' '}
              O maximo de rodadas são 10, e deve pelo menos iniciar com uma
            </li>
          </ul>
        </details>
      </div>
      <div>
        <details>
          <summary>Regras do Jogo</summary>
          <br />
          <ul>
            <li>
              <strong>VITORIA:</strong>
              {' '}
              Em caso de vitoria o jogo deve seguir para a proxima rodada.
            </li>
            <li>
              <strong>EMPATE:</strong>
              {' '}
              Em caso de empate a partida devera ser reiniciada.
              </li>
            <li>
              <strong>FINALIZA:</strong>
              {' '}
              O jogo termina quando todas as rodadas são jogadas.
            </li>
          </ul>
        </details>
      </div>
    </section>
  )
}