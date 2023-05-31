import Image from "next/image";

export default function InputPublico({
    imagem,
    tipo,
    texto,
    valor = '',
    exibirMsgValidacao = false,
    msgValidacao = '',
    aoAlterarValor

}) {
    return (
        <div className="inputPublicoContainer">
            <div className="InputPublico">
                <Image
                    src={imagem}
                    alt ="imagem do campo"
                    className="iconeInputPublico"
                    width={20}
                    height={20}
                />

                <input
                    type={tipo}
                    placeholder={texto}
                    value={valor}
                    onChange={aoAlterarValor}
                />
               
            </div>
            {exibirMsgValidacao && <p className="msgValidacao">{msgValidacao}</p>}
        </div>
    );
}