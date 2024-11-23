import { RefObject } from "react";
import { BEvent, IEvent, Post, TEvent } from "../lib/types";

type PostProps = {
  post: Post;
  saveTitleToState: (e: IEvent) => void;
  saveContentToState: (e: TEvent) => void;
  updatePost: (e: BEvent) => void;
  titleRef: RefObject<HTMLInputElement>;
  contentRef: RefObject<HTMLTextAreaElement>;
}

const Edit = (props: PostProps) => {
  const {
    post,
    saveTitleToState,
    saveContentToState,
    updatePost,
    titleRef,
    contentRef,
  } = props;

  return (
    <form>
      <h1>Edit Post</h1>
      <input
        className="form-control mb-2"
        type='text'
        onChange={saveTitleToState}
        ref={titleRef}
        defaultValue={post.title}
      />
      <textarea
        className="form-control mb-2"
        onChange={saveContentToState}
        ref={contentRef}
        defaultValue={post.content}
      ></textarea>
      <button className="btn btn-primary" onClick={updatePost}>
        <i className="fa-solid fa-floppy-disk me-2"></i>
        Update
      </button>
    </form>
  )
}

export default Edit