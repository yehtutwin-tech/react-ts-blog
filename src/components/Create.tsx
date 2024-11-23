import { RefObject } from "react";
import { BEvent, IEvent, TEvent } from "../lib/types";

type CreateProps = {
  saveTitleToState: (e: IEvent) => void;
  saveContentToState: (e: TEvent) => void;
  savePost: (e: BEvent) => void;
  titleRef: RefObject<HTMLInputElement>;
  contentRef: RefObject<HTMLTextAreaElement>;
}

const Create = (props : CreateProps) => {
  const {
    saveTitleToState,
    saveContentToState,
    savePost,
    titleRef,
    contentRef,
  } = props;
  
  return (
    <form>
      <h1>Create New Post</h1>
      <input
        className="form-control mb-2"
        type='text'
        onChange={saveTitleToState}
        ref={titleRef}
      />
      <textarea
        className="form-control mb-2"
        onChange={saveContentToState}
        ref={contentRef}
      ></textarea>
      <button className="btn btn-primary" onClick={savePost}>
        <i className="fa-solid fa-floppy-disk me-2"></i>
        Create
      </button>
    </form>
  )
}

export default Create