

export default function reducer(state, action) {
    switch(action.type){
        case "plus" :return{...state, count:state.count+1}
        


        default: return state
            break;
    }
}
  
