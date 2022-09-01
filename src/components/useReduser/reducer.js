export default function reducer(state, action) {
    switch (action.type) {
        case "pluse": return {...state, count: state.count + 1}
            
            
    
        default: return state
            
    }
}
