import { Article, blog } from "../../assets/data";
import { Link, useRouteMatch } from 'react-router-dom';
import Top from './Top';

const prefix = 'blog';

const Blog: React.FC = ():JSX.Element => {
  const { url } = useRouteMatch();
  
  return (
    <>
    <Top />
    <div className={prefix}>
      {blog.map((article: Article): JSX.Element => (
        <div className={`${prefix}-item`} key={article.path}>
          <h1>{article.title}</h1>
          <div className={`${prefix}-tags`}>
            {
              article.tags.map((tag: string, index: number): JSX.Element => (
                <span className={`${prefix}-tag`} key={index}>{ tag }</span>
              ))
            }
          </div>
          <div className={`${prefix}-description`}>{article.description}</div>
          <Link to={`${url}/${article.path}`} className={`${prefix}-link`}>Read</Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default Blog;