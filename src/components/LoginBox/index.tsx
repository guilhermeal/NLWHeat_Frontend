import { useEffect } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

type AuthResponse = {
  token: string,
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export function LoginBox() {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=c4038d5ea2aa8df20871`;

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode,
    })

    const { token, user } = response.data;

    // Vamos salvar o Token do usuario no navegador;
    localStorage.setItem('@dowhile:token', token);

    console.log(' #USER# ', user);
  }

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');
    if(hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');
      // console.log({urlWithoutCode, githubCode});

      // Forçar usuario a sair desta pagina (para retirar o code da URL)
      // Como se tivesse forçando a navegacao do usuario
      window.history.pushState({}, '', urlWithoutCode);

      signIn(githubCode);
    }
  }, [])

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size={24} /> Entrar com Github
      </a>
    </div>
  );
}
