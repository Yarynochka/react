export default  function Posts ({posts}) {

    return (
        <div>
            {posts.map(value=> <div> {value.id}</div>)}
        </div>
    );
}