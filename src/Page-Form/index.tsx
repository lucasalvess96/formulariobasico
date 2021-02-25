import { FormEvent } from 'react'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'

import './style.css'

function PageForm(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [numero, setNumero] = useState("")
    const [senha, setSenha] = useState("")
    const [confsenha, setConfSenha] = useState("")

    function handleSubmitForm(event: FormEvent){
        event.preventDefault()
        const date = [
            nome, email, numero, senha, confsenha
        ]

        if(senha == confsenha){
            history.push("/PageBasic")
        }else{
            alert("As senhas não são iguais")
        }

        alert(date)
    }

    const history = useHistory()

    return(
       <div id="page-login">
           <div className="page-one">
               <h1>Fazer Cadastro</h1>

               <form onSubmit={handleSubmitForm} className="form-edition">
                    <div className="input-field">
                        <input 
                            type="text" 
                            placeholder="seu nome"
                            required 
                            value={nome} 
                            onChange={(event) => {setNome(event.target.value)}}
                        />
                        <div className="underline"></div>
                    </div>

                    <div className="input-field">
                        <input
                            type="email"
                            placeholder="seu email"
                            required
                            value={email}
                            onChange={(event) => {setEmail(event.target.value)}}
                           />
                        <div className="underline"></div>
                    </div>

                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="telefone de contato"
                            required
                            value={numero}
                            onChange = {(event) => {setNumero(event.target.value)}}
                        />
                        <div className="underline"></div>
                    </div>

                    <div className="input-field">
                        <input
                            type="password" 
                            placeholder="sua senha" 
                            required
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                         />
                        <div className="underline"></div>
                    </div>

                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="confirmar senha"
                            required
                            value={confsenha}
                            onChange={(event) => {setConfSenha(event.target.value)}}
                           />
                        <div className="underline"></div>
                    </div>

                    <button className="btn">Cadastrar</button>
               </form>
           </div>
       </div>
    )
}

export default PageForm