import {createStore} from 'redux'


export const CHANGE_NAME='change-name'
export const GET_ARR_ELEMENTS='get-arr-elements'


const initialState={
    name:"Redux",
    arr:['html', 'Css', 'java', 'javascript']
}



function reducer(state, action){
    switch (action.type) {
        case CHANGE_NAME: return {...state, name: action?.payload?.name }
        case GET_ARR_ELEMENTS: return {... state, arr: action.payload.arr } 
            
            
    
        default: return state
            
    }

}


const store=createStore(reducer, initialState)


export default store
