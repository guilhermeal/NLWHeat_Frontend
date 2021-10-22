import styles from './styles.module.scss';

import logoImp from '../../assets/logo.svg';

export function MessageList() {
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

                
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse DoWhile</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/guilhermeal.png" alt="Guilherme Almeida" />
                        </div>
                        <span>Guilherme Almeida</span>
                    </div>
                </li>

                
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