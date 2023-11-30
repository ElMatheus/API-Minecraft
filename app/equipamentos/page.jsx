"use client"
import axios from "axios";
import Header from '../components/header/header';
import styles from './equipamentos.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const equipamentoPage = () => {
    const [dados, setDados] = useState([]);
    const [equipamentos, setEquipamentos] = useState([]);

    const [equipamento, setEquipamento] = useState(null);

    useEffect(() => {
        async function fetchEquipamentos() {
            try {
                const response = await axios.get("/api/equipamentos");
                console.log(response);
                setEquipamentos(response.data);
                setDados(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchEquipamentos();
    }, []);

    const handleEquipamento = (item) => {
        let itemEquipamento = document.getElementById(`${item}Img`);
        itemEquipamento.classList.remove(`${styles.hidden}`);
        setEquipamento(item);
    }

    return (
        <>
            <Header />
            <div className={styles.bg}>
                <div className={styles.boxInventory}>
                    <div className={styles.armadura}>
                        <div onClick={() => handleEquipamento('capacete')} className={styles.itemArmadura}>
                            <img id='capaceteImg' className={`${styles.itemDoItem} ${styles.hidden}`} src={"https://minecraft.tools/en/img/outils/armure-complete-site-mctools.png"} alt="capacete" />
                        </div>
                        <div onClick={() => handleEquipamento('peitoral')} className={styles.itemArmadura}>
                            <img id='peitoralImg' className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/golden_chestplate.png"} alt="peitoral" />
                        </div>
                        <div onClick={() => handleEquipamento('calca')} className={styles.itemArmadura}>
                            <img id="calcaImg" className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/golden_leggings.png"} alt="calça" />
                        </div>
                        <div onClick={() => handleEquipamento('bota')} className={styles.itemArmadura}>
                            <img id="botaImg" className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/golden_boots.png"} alt="bota" />
                        </div>
                        <div onClick={() => handleEquipamento('espada')} className={`${styles.espadaSlot} ${styles.itemArmadura}`}>
                            <img id="espadaImg" className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/golden_sword.png"} alt="espada" />
                        </div>
                        {
                            equipamento == 'capacete' ? (
                                <div>
                                    <h1>Capacete</h1>
                                    {dados.length ? (
                                        equipamentos ? (
                                            <div className={styles.equipamentosPredefinidos}>
                                                {dados.map((equipamento) => (
                                                    equipamento.tipo == 'capacete' ? (
                                                        <div key={equipamento.id}>
                                                            <div>
                                                                <p>
                                                                    <strong>ID:</strong> {equipamento.id}
                                                                </p>
                                                                <p>
                                                                    <strong>Nome:</strong> {equipamento.nome}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ) : null
                                                ))}
                                            </div>
                                        ) : (
                                            <p>Carregando...</p>
                                        )
                                    ) : (
                                        <p>Não há alunos cadastrados</p>
                                    )}
                                    <input type="text" placeholder='Nome do equipamento' />
                                    <input type="text" placeholder='Descrição do equipamento' />
                                    <input type="text" placeholder='Material do equipamento' />
                                    <input type="number" placeholder='Valor da defesa' />
                                    <input type="text" placeholder='Cor do equipamento' />
                                    <button className={styles.buttonSend}>Cadastrar Capacete</button>
                                </div>
                            ) : null
                        }
                        {
                            equipamento == 'peitoral' ? (
                                <div>
                                    <h1>Peitoral</h1>
                                    {dados.length ? (
                                        equipamentos ? (
                                            <div className={styles.equipamentosPredefinidos}>
                                                {dados.map((equipamento) => (
                                                    equipamento.tipo == 'peitoral' ? (
                                                        <div key={equipamento.id}>
                                                            <div>
                                                                <p>
                                                                    <strong>ID:</strong> {equipamento.id}
                                                                </p>
                                                                <p>
                                                                    <strong>Nome:</strong> {equipamento.nome}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ) : null
                                                ))}
                                            </div>
                                        ) : (
                                            <p>Carregando...</p>
                                        )
                                    ) : (
                                        <p>Não há alunos cadastrados</p>
                                    )}
                                    <input type="text" placeholder='Nome do equipamento' />
                                    <input type="text" placeholder='Descrição do equipamento' />
                                    <input type="text" placeholder='Material do equipamento' />
                                    <input type="number" placeholder='Valor da defesa' />
                                    <input type="text" placeholder='Cor do equipamento' />
                                </div>
                            ) : null
                        }
                        {
                            equipamento == 'calca' ? (
                                <div>
                                    <h1>Calça</h1>
                                    <input type="text" placeholder='Nome do equipamento' />
                                    <input type="text" placeholder='Descrição do equipamento' />
                                    <input type="text" placeholder='Material do equipamento' />
                                    <input type="number" placeholder='Valor da defesa' />
                                    <input type="text" placeholder='Cor do equipamento' />
                                </div>
                            ) : null
                        }
                        {
                            equipamento == 'bota' ? (
                                <div>
                                    <h1>Bota</h1>
                                    <input type="text" placeholder='Nome do equipamento' />
                                    <input type="text" placeholder='Descrição do equipamento' />
                                    <input type="text" placeholder='Material do equipamento' />
                                    <input type="number" placeholder='Valor da defesa' />
                                    <input type="text" placeholder='Cor do equipamento' />
                                </div>

                            ) : null
                        }
                        {
                            equipamento == 'espada' ? (
                                <div>
                                    <h1>Espada</h1>
                                    <input type="text" placeholder='Nome do equipamento' />
                                    <input type="text" placeholder='Descrição do equipamento' />
                                    <input type="text" placeholder='Material do equipamento' />
                                    <input type="number" placeholder='Valor do ataque' />
                                    <input type="text" placeholder='Cor do equipamento' />
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default equipamentoPage