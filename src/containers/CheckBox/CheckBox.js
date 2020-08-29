import React,{Component} from 'react'
import classes from './CheckBox.module.css'
import Aux from '../../hoc/auxillary'
class CheckBox extends Component{
    state = {
        options:null
    }
    toInputs = ()=>{
        
    }
    render(){
        let output = <Aux>
            <p>HOW MANY CHECKBOX</p>
                <select className={classes.selectCss}>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button onClick={this.toInputs}>select</button>
        </Aux>
        return(
            <div className={classes.container}>
                {output}
                <input>
                </input>
                <input>
                </input>
                <div>
                <button>ok</button>
                </div>
               {/* <label>MALE</label>
               <input type='checkbox'/>  */}
               {/* <label>FEMALE</label>
               <input type='checkbox'/>  */}
            </div>
        )
    }
}

export default CheckBox