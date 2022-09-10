import {getASYNCPosts} from "./postAPI";


export function asyncloadSerials(){
	return function (dispatch, getState) {
		return getASYNCPosts().then(response=>{
			dispatch(addPostAction(response))
		})
	}
}





export function postsReducer(state = [], action) {
	console.log(action);
	switch (action.type) {
		case "ADD-POST":
			return [...state, action.payload]

		default: return state;
	}
}

export const initialPostValue = [
	{
		id: 1,
		title: "lorem ipsum ...",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quis nostrum temporibus suscipit consequatur quidem repellat perferendis ipsam aut minus fugit aperiam repellendus mollitia, repudiandae tenetur laborum cum quisquam ad!"
	}
]

export function addPostAction(post) {
	console.log(111);
	return {
		type: "ADD-POST",
		payload: {
			id: 2,
			title: "lorem ipsum2",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quis nostrum temporibus suscipit consequatur quidem repellat perferendis ipsam aut minus fugit aperiam repellendus mollitia, repudiandae tenetur laborum cum quisquam ad!"
		}
	}
}

export function selectPosts(state) {
	return state.posts
}