import Head from 'next/head'
import Image from 'next/image'
import Botao from '@/componentes/botao'
import Avatar from '../componentes/avatar'
import { UploadImagem } from '@/componentes/uploadImagem'
import { useState, useRef } from 'react'


export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  console.log(imagem);

  return (
    <>
      <h1>Olá Mundo!</h1>
      <button onClick={() => referenciaInput?.current?.click()}>Selecionar um Arquivo</button>
      <UploadImagem
        setImagem={setImagem}
        imagemPreview={imagem?.preview}
        aoSetarAReferencia={(ref) => referenciaInput.current = ref}
      />

      <div style={{ width: 200 }}>
        <Avatar />
        <Botao texto={'Loguin'} manipularClick={() => console.log('botão clicado')} />
      </div>
    </>
  )
}
