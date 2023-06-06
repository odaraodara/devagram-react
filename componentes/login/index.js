import InputPublico from "../inputPublico";
import { useState } from "react";
import Link from "next/link";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";
import imagemLogo from "../../public/imagens/logo.svg";
import { validarEmail, validarSenha } from "../../utils/validadores";
import Image from "next/image";
import Botao from "../botao";




export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validarFormulario = () => {
        return (
            validarEmail(email) && validarSenha(senha)
        )
    }

    return (
        <section className={`paginaLogin paginaPublica`}>
            <div className="logoContainer">
                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    layout="fill"
                    className="logo"
                />
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        aoAlterarValor={e => setEmail(e.target.value)}
                        valor={email}
                        msgValidacao="O endereço informado é inválido"
                        exibirMsgValidacao={email && !validarEmail(email)}
                    />
                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo="password"
                        aoAlterarValor={e => setSenha(e.target.value)}
                        valor={senha}
                        msgValidacao="Mínimo de 3 caracteres"
                        exibirMsgValidacao={senha && !validarSenha(senha)}
                    />
                    <Botao
                        texto="Login"
                        tipo="submit"
                        desabilitado={!validarFormulario()}
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Não possui uma conta?</p>
                    <Link href="/cadastro" >Faça seu cadastro agora</Link>
                </div>

            </div>
        </section>
    );
}