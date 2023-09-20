import parse from 'html-react-parser';

export default function Projectstext({ post }) {

    return (
        <div className='project-heading'>
            <h3>{parse(post.title.rendered)}</h3> 
            <div className="project-text">
                <div>{parse(post.content.rendered)}
                </div>
              
            </div>
        </div>
    );
}