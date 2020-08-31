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
        let inputTypes = this.props.inputTypes.filter(input=>{
            return input !==' '
        })
        let outPuts = filteredLabels.map((label,index)=>{
            return(
                <Aux>
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
        inputTypes: state.inputTypes
    }
}
export default connect(stateToProps,null)(Form) 