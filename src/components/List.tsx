import { useRef, useState } from 'react'
import Create from './Create';
import Post from './Post';
import Edit from './Edit';
import { BEvent, IEvent, TEvent, type Post as PostProps } from '../lib/types';

const List = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState<PostProps[]>([
    { id: 1, title: 'title 1', content: 'content 1' },
    { id: 2, title: 'title 2', content: 'content 2' },
  ]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const saveTitleToState = (e: IEvent) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  }

  const saveContentToState = (e: TEvent) => {
    // console.log(e.target.value);
    setContent(e.target.value);
  }

  const savePost = (e: BEvent) => {
    e.preventDefault();
    setPosts([...posts, { id: Date.now(), title, content }])
    titleRef.current!.value = '';
    // titleRef.current!.focus();
    contentRef.current!.value = '';
    toggleCreate();
  }

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  }

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  }

  const editPost = (id: number) => {
    setEditId(id);
    toggleEdit();
  }

  const updatePost = (e: BEvent) => {
    e.preventDefault();
    const updatedPosts = posts.map(post => {
      if (post.id === editId) {
        return {
          ...post,
          title,
          content,
        }
      }
      return post;
    });
    setPosts(updatedPosts);
    toggleEdit();
  }

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  }

  if (isCreate) {
    return (
      <>
        <Create
          saveTitleToState={saveTitleToState}
          saveContentToState={saveContentToState}
          savePost={savePost}
          titleRef={titleRef}
          contentRef={contentRef}
        />
      </>
    )
  }
  else if (isEdit) {
    const post = posts.find(post => post.id === editId);
    if (post) {
      return (
        <>
          <Edit
            post={post}
            saveTitleToState={saveTitleToState}
            saveContentToState={saveContentToState}
            updatePost={updatePost}
            titleRef={titleRef}
            contentRef={contentRef}
          />
        </>
      )
    }
  }
  return (
    <>
      <h3>All Posts</h3>
      <button className='btn btn-primary my-2' onClick={toggleCreate}>
        <i className="fa-solid fa-plus me-2"></i>
        Add
      </button>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map(post => (
            <Post
              key={post.id}
              post={post}
              editPost={editPost}
              deletePost={deletePost}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default List