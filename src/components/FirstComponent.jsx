export const FirstComponent = () => {
    const title = "Hello from the app component!";
    const body = "Cool!";
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'},
    ];
    const loading = false;
    const showComments = true;

    const commentBlock =
        <div className='comments'>
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => {
                    return <li key={comment.id}>{comment.text}</li>
                })}
            </ul>
        </div>;

    if (loading) return <h1>Loading...</h1>;
    return (
        <>
            <h1 className="title">{title.toUpperCase()}</h1>
            <p>{body}</p>
            {showComments && commentBlock}
        </>
    )
}
