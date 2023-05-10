import "./delete.css";

interface PostProps{
    username:string,
    title: string,
    content: string
}

export function Post({username, title, content} : PostProps){
    return ( 
      <div className="modal-overlay">
        <h1>Username: {username}</h1>
        <h2>Title: {title}</h2>
        <p><b>Content: </b>{content}</p>
      </div>
    )
}