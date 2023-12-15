import './TextField.css';

// Qual problema que arrow function resolve? Escopo léxico 
const TextField = (props) => {

    // let valor = 'Thales';
    // const [valor, setValor] = useState('Thales');

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div> 
    )
}
  
export default TextField;