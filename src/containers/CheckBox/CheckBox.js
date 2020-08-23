import React,{Component} from 'react'
import classes from './CheckBox.module.css'
import FieldName from '../fieldName/FieldName'

class CheckBox extends Component{
   
    render(){
        let outPut = []
        for(let i = 0; i<this.props.howMany; i++){
            outPut.push(i)
        }
        let outputs = outPut.map((i)=>{
            return <div className={classes.checkBox} key={i}>
                <div>
                <FieldName/>
                </div>
                <input type='checkbox'/>
            </div>
        })
        return(
            <div>
                {outputs}
            </div>
        )
    }
}

export default CheckBox