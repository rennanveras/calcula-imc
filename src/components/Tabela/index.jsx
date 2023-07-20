import React from "react";
import styles from "./table.module.css"

function Tabela() {


    return (
        <>
            <table>
                <thead >
                    <tr>
                        <th colSpan="3">Veja a interpretação do Imc</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                    <th className={styles.obesidade}>Obesidade<small>&#40;grau&#41;</small></th>
                </tr>
                <tr>
                    <td>Menor que 18,5</td>
                    <td>Normal</td>
                    <td className={styles.obesidade}>0</td>
                </tr>
                <tr>
                    <td>Entre 18,5 e 24,9</td>
                    <td>Normal</td>
                    <td className={styles.obesidade}>0</td>
                </tr>
                <tr>
                    <td>Entre 25,0 e 29,9</td>
                    <td>Sobrepeso</td>
                    <td className={styles.obesidade}>I</td>
                </tr>
                <tr>
                    <td>Entre 30,0 e 39,9</td>
                    <td>Obesidade</td>
                    <td className={styles.obesidade}>II</td>
                </tr>
                <tr>
                    <td>Maior que 40,0</td>
                    <td>Obesidade Grave</td>
                    <td className={styles.obesidade}>III</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default Tabela;