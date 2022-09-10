export function getASYNCPosts() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                title:"sdasdsa",
                description:"lorem jhjbf jhfghfd hdgfhgd"
            })
        }, 2000)
    })
    
}