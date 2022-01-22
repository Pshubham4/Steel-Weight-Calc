import React ,{Component} from 'react'
import data from './data'


let Mycontext = React.createContext();

class Myprovider extends Component
{

    state = {data,
            sectionState:"",
            sectionSize:[],
            sizeToggle:0,
            weight:0}

    render(){
        return(
            <Mycontext.Provider value={(this.state)}>
                {this.props.children}
            </Mycontext.Provider>

        )
    }
}

export {Mycontext,Myprovider}