const formState = {
    labels:[],
    inputTypes:[],
    checkboxLabels:[]

}

const reducer = (state=formState,action)=>{
    switch(action.type){
        case 'GET_LABEL':
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
        case 'GET_CHECKBOX_LABEL':
            let totaList = [...state.checkboxLabels]
            if(totaList.length<=action.id){
                for(let i=0; i<action.id+1; i++){
                    totaList.push([' ',' ',' ',' ',' '])
                }
            }
            let instanceList = totaList[action.id]
            instanceList.splice(action.instanceId,1,action.labelName)
            totaList.splice(action.id,1,instanceList)
            state = {
                ...state,
                checkboxLabels:totaList
            }
            break;
        default:
            return state
    }
    return state
}

export default reducer