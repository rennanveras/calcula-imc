import { useEffect, useState } from "react";
import styles from "./formulario.module.css";

function Formulario() {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setImc] = useState(null);

    function calculaImc() {
        const pesoFloat = parseFloat(peso);
        const alturaFloat = parseFloat(altura);
        if(!pesoFloat && !alturaFloat){
            setImc("Adicione um valor nos campos")
        }else{
            setImc((pesoFloat / (alturaFloat * alturaFloat)).toFixed(1))
        }
        
    }
    function limparInput(){
        setAltura("")
        setPeso("")
        setImc(null)
    }
    useEffect(() => {

    }, [imc]);

    return (
        <div className={styles.content}>
            <div>
                <input type="number" placeholder="Digite a sua altura" value={altura} onChange={({ target }) => setAltura(target.value)} />
                <input type="number" placeholder="Digite o seu peso" value={peso} onChange={({ target }) => setPeso(target.value)} />
            </div>
            <div>
                <button onClick={calculaImc}>Calcular</button>
                <button onClick={limparInput}>Limpar</button>
            </div>
            <span className={styles.imc}>{imc === null || NaN ? 'Seu Imc:  0': `Seu Imc:  ${imc}`}</span>
            
        </div>
    )
}

export default Formulario;