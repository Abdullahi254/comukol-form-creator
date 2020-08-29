const formState = {
    labels:[],
    inputTypes:[]

}

const reducer = (state=formState,action)=>{
    switch(action.type){
        case 'GET_LABEL':
            console.log(action.id)
            let newLabels = [...state.labels]
            if(newLabels.length<=action.id){
                for(let i=0; i<action.id+1; i++){
                    newLabels.push(' ')
                }
                newLabels.splice(action.id,1,action.label)
            }
            newLabels.splice(action.id,1,action.label)
            state = {
                ...state,
                labels:newLabels
            }
            break;
        case 'GET_INPUT_TYPE':
            console.log(action.id)
            let newInputs = [...state.inputTypes]
            if(newInputs.length<=action.id){
                for(let i=0; i<action.id+1; i++){
                    newInputs.push(' ')
                }
            }
            newInputs.splice(action.id,1,action.inputType)
            state = {
                ...state,
                inputTypes:newInputs
            }
            break;
        default:
            return state
    }
    return state
}

export default reducer