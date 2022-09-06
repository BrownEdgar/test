export default function  ( state, action) {
    let x  = Math.floor(Math.random()*100)
    switch(action.type){
    case "plus" : return {...state,count:state.count + 1 }
    case "minus" : return {...state,count:state.count - 1}
    case "random" : return {...state,count:state.count + x}
    default : return state
    }
}