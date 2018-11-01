import React from 'react'
import instagram from './instagram.png'
import facebook from './facebook.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import './RedesSociais.css'

function RedesSociais(props){
    return(
            <div class="sobre-conteudo__redes-sociais">
            <a href="https://www.instagram.com/milima26">
                <img src={instagram} alt="Ícone do Instagram"/> 
            </a>
            <a href="https://www.facebook.com/camila.lima.5811877">
                <img src={facebook} alt="Ícone do Facebook"/>
            </a>
            <a href=">https://twitter.com.br">
                <img src={twitter} alt="Ícone do Twitter"/>
            </a>
            <a href="https://www.linkedin.com/in/camilamlima/">
                <img src={linkedin} alt="Ícone do Linkedin"/>
            </a>
            </div>
    )
}
export default RedesSociais