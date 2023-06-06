import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import imagemLogo from "../../public/imagens/logo.svg";
import imagemUsuarioAtivo from "../../public/imagens/usuarioAtivo.svg";
import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";
import imagemAvatar from "../../public/imagens/avatar.svg";
import Botao from "@/componentes/botao";
import InputPublico from "@/componentes/inputPublico";
import { UploadImagem } from "@/componentes/uploadImagem";
import { validarNome, validarEmail, validarSenha, validarConfirmacaoSenha } from "../../utils/validadores"


export default function Cadastro() {
    const [imagem, setImagem] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

    const validarFormulario = () => {
        return (
            validarNome(nome)
            && validarEmail(email)
            && validarSenha(senha)
            && validarConfirmacaoSenha(senha,confirmacaoSenha)
        );
    }

    return (
        <section className={`paginaCadastro paginaPublica`}>
            <div className="logoContainer desktop">

                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    layout="fill"
                    className="logo"
                />

            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <UploadImagem
                        imagemPreviewClassName="avatar avatarPreview"
                        imagemPreview={imagem?.preview || imagemAvatar.src}
                        setImagem={setImagem}

                    />

                    <InputPublico
                        imagem={imagemUsuarioAtivo}
                        texto="Nome Completo"
                        tipo="texto"
                        aoAlterarValor={e => setNome(e.target.value)}
                        valor={nome}
                        msgValidacao="Mínimo de 2 caracteres"
                        exibirMsgValidacao={nome && !validarNome(nome)}
                    />

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

                    <InputPublico
                        imagem={imagemChave}
                        texto="Confirmar Senha"
                        tipo="password"
                        aoAlterarValor={e => setConfirmacaoSenha(e.target.value)}
                        valor={confirmacaoSenha}
                        msgValidacao="As senhas precisam ser iguais"
                        exibirMsgValidacao={confirmacaoSenha && !validarConfirmacaoSenha(senha, confirmacaoSenha)}
                    />

                    <Botao
                        texto="Cadastrar"
                        tipo="submit"
                        desabilitado={!validarFormulario()}
                    />
                </form>
                <div className="rodapePaginaPublica">
                    <p>Já possui uma conta?</p>
                    <Link href='/'>Faça seu login agora</Link>
                </div>
            </div>
        </section>
    );
}