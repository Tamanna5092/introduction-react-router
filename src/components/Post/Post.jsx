import { Link, useNavigate,  } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid chocolate',
        borderRadius: '10px'
    }

    const handelShowDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>Post of id: {id}</h2>
            <h3>Title: {title}</h3>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handelShowDetails}>Show Handle Details</button>
        </div>
    );
};

export default Post;