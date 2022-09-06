
export const initialName = {
    name:"Jhoh Snow"
}

export function nameReducer(state = {} , action){
    if(action.type === "change-friend-name"){
        return{
            ...state,
            name:action.payload.name
        }
    }
    return false
}

