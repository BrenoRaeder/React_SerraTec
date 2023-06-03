import './style.css';

function Formacao(props) {

    const titulo = props.titulo;
    const infos = props.infos;

    return (
        <div class="container-formacoes">
            <h2>{titulo}</h2>
            { infos.map(f => {
                return (
                    <div class="container-formacao">
                        <h3>{f.titulo}</h3>
                        <p>{f.periodo}</p>
                        <p>{f.instituicao}</p>
                    </div>
                )
            }) }
        </div>
    )
}

export default Formacao;

