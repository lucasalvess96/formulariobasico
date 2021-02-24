import {Link} from 'react-router-dom'


import './style.css'

const PageBasic = () => {
    return(
        <div id="page-h1">
            <h1>Obrigador por se cadastrar</h1>

            <Link to="/">Fazer novo cadastro</Link>
        </div>
    )
}

export default PageBasic