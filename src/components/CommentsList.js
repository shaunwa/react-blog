import React from 'react';
import AddCommentForm from './AddCommentForm';

const CommentsList = ({ comments, articleName, setArticleInfo }) => (
    <>
    <h3>Comments:</h3>
    {comments.map((comment, key) => (
        <div className="comment" key={key}>
            <h4>{comment.postedBy}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    <AddCommentForm articleName={articleName} setArticleInfo={setArticleInfo} />
    </>
);

export default CommentsList;