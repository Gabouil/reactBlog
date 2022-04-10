export default function Post({post, i}) {
    return (
        <div id={'post' + i} className={'card w-50 mb-5'}>
            <h1>{post?.title}</h1>
            <h6 className={'mb-3'}>{post?.username}</h6>
            <p>{post?.content}</p>
        </div>
    )
}