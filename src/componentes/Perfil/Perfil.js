import React from 'react'
import RedesSociais from '../../componentes/RedesSociais/RedesSociais';
import perfil from './perfil.png'
import './Perfil.css'


function Perfil(props) {
 return (
   <main class="secao-sobre">
            <div class="sobre-conteudo">
                <img class="sobre-conteudo__img" src= {perfil} alt="Foto Camila Perfil"/>
                <h1>Camila Lima</h1>
                <h2>Desenvolvedora Frontend</h2>
                <RedesSociais/>
            </div>
    </main>
 )
}

export default Perfil