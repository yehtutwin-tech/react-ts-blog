import { type Post } from "../lib/types";

type PostProps = {
  post: Post;
  editPost: (id: number) => void;
  deletePost: (id: number) => void;
}

const Post = ({ post, editPost, deletePost }: PostProps) => {
  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td>
        <button className="btn btn-warning me-2" onClick={() => editPost(post.id)}>
          <i className="fa-solid fa-pen-to-square me-2"></i>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => deletePost(post.id)}>
          <i className="fa-solid fa-trash me-2"></i>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Post