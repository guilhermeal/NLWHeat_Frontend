import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import styles from './styles.module.scss';

import logoImp from '../../assets/logo.svg';

type Message = {
    id: string;
    text:string;
    user: {
        name: string;
        avatar_url: string;
    }
}

export function MessageList() {

    /* Esse Parâmetro é necessário e refere-se ao valor inicial do 
     * estado. Esse valor inicial deve ser do mesmo tipo do dado que 
     * irá usar o estado; */
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        // Parâmetro 1 (O que vai executar?)
        api.get<Message[]>('messages/last3').then(response => {
            setMessages(response.data);
        });
    },
        // Parâmetro 2: (Quando vai executar?) [] -> Vazio => Vai executar apenas uma única vez
        []
    );

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImp} alt="Do While 2021" />

            <ul className={styles.messageList}>
               
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse DoWhile</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/guilhermeal.png" alt="Guilherme Almeida" />
                        </div>
                        <span>Guilherme Almeida</span>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}