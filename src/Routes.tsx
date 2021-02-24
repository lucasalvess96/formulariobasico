import { BrowserRouter, Switch, Route } from 'react-router-dom' 

import PageForm from './Page-Form'
import PageBasic from './Page-cadastrofeito'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={PageForm} exact/>
                <Route  path="/PageBasic" component={PageBasic}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router