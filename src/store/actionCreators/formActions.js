export const getLabel = (label,id)=>{
    console.log(id)
    return {
        type:'GET_LABEL',
        label,
        id
    }
}