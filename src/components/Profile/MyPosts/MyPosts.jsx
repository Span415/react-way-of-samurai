import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) => {
    let newPost = React.createRef();

    let sendPost = () => {
        props.addPost();
    }

    let postsElement = props.posts.map(p => <Post message={p.message} like={p.likesCount} />);

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPost} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={sendPost}>Send</button>
                </div>
                <div>
                    New post
            </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
