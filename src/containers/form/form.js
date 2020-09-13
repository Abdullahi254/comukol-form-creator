import React,{Component} from 'react'
import classes from './form.module.css'
import Label from '../../components/label/label'
import Input from '../../components/textInput/textInput'
import TextArea from '../../components/textArea/TextArea'
// import Submit from '../../components/submit/submit'
import {connect} from 'react-redux'
import Aux from '../../hoc/auxillary'
import Pdf from 'react-to-pdf'

class Form extends Component{
    state ={
        outputs:null
    }
    // convertToPdf = (event)=>{
    //     event.preventDefault();
    //     console.log(event.target.value)
    // }

    render(){
        let filteredLabels = this.props.labels.filter(label=>{
            return label !==' '
        })
        let filterCheckBoxLabels = this.props.checkBoxLabels.filter(instance=>{
            return instance[0] !==' '
        })
        let cleanCheckBoxLabels = filterCheckBoxLabels.map(instace=>{
            return(
                instace.filter(element=>element !==' ')
            )
        })
        let checkBox = []
        let elements = []
        for(let i=0;i<cleanCheckBoxLabels.length;i++){
            for(let j=0; j<cleanCheckBoxLabels[i].length; j++){
                 elements.push(
                    <Aux key={j}>
                        <br/>
                        <label className={classes.checkboxLabel}>{cleanCheckBoxLabels[i][j]}</label>
                        <input type='checkbox' className={classes.checkBox} />
                    </Aux>
                 )
            }
            checkBox.push(elements)
            elements = []
        }
        let inputTypes = this.props.inputTypes.filter(input=>{
            return input !==' '
        })
        let outPuts = filteredLabels.map((label,index)=>{
            if(inputTypes[index]==='checkbox'){
                let output = checkBox[0]
                checkBox.shift()
                return(
                    <Aux key={index}>
                        <Label>{label}</Label>
                        {output}
                    </Aux>    
                )
            }
            
            return(
                <Aux key={index}>
                    <Label>{label}</Label>
                    {inputTypes[index]==='text-area'?<TextArea/>:<Input type={inputTypes[index]}/>}
                </Aux>
            )
        })
        const ref = React.createRef()
        
        return(
            <div className={classes.container}>
                <form onSubmit={(event)=>this.convertToPdf(event)} ref={ref}> 
                    {outPuts}
                </form>
                <Pdf targetRef={ref} filename='comucol-form.pdf' x={7} y={40}>
                    {
                        ({toPdf})=>(
                            <button onClick={toPdf} className={classes.button}>PRINT</button>
                        )
                    }
                </Pdf>
            </div>
        )
    }
}
const stateToProps = state=>{
    return{
        labels:state.labels,
        inputTypes: state.inputTypes,
        checkBoxLabels:state.checkboxLabels
    }
}
export default connect(stateToProps,null)(Form) 