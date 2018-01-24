export default (props) =>
    <div className='card'>
        <div className='card-body'>
            <h4 className='card-title'>{props.post.title}</h4>
            <h6 className='card-title'>{props.post.subtitle}</h6>
            <p className='card-text'>{props.post.content}</p>
            <blockquote className="blockquote mb-0">
                <footer className="blockquote-footer">{props.post.author}</footer>
            </blockquote>
        </div>
    </div>;