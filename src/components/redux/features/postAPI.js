export function getASYNCPosts() {
		return new Promise((resolve) => { 
				setTimeout(() => { 
					resolve({
						title:"sdasdsa",
						description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quam suscipit blanditiis voluptatum corrupti consequuntur magni asperiores dolore, sunt, rerum sint cumque eaque cum ad impedit, voluptates pariatur quos? Illum?"
					})
				 }, 2000)
		})
}