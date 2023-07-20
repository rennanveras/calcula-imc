import { useEffect, useState } from "react";
import styles from "./formulario.module.css";

function Formulario() {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setImc] = useState(null);

    function calculaImc() {
        const pesoFloat = parseFloat(peso);
        const alturaFloat = parseFloat(altura);
        if (isNaN(pesoFloat) || isNaN(alturaFloat) || pesoFloat <= 0 || alturaFloat <= 0) {
            setImc("Adicione valores válidos nos campos de peso e altura");
        } else {
            setImc((pesoFloat / (alturaFloat * alturaFloat)).toFixed(1));
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
            <span className={styles.imc}>{imc === null ? 'Seu IMC: 0' : `Seu IMC: ${imc}`}</span>

            
        </div>
    )
}

export default Formulario;