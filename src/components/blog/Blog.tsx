import { useEffect, useState } from "react";
import { Article, blog } from "../../assets/data";
import { Link, useRouteMatch } from 'react-router-dom';
import Top from './Top';

const prefix = 'blog';

const Blog: React.FC = ():JSX.Element => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    fetch(blog[0].file).then(res => res.text()).then(data => { setText(data) });

  }, []);

  const { path, url } = useRouteMatch();
  
  return (
    <>
    <Top />
    <div className={prefix}>
      {blog.map((article: Article): JSX.Element => (
        <div className={`${prefix}-item`}>
          <h1>{article.title}</h1>
          <div>{article.description}</div>
          <Link to={`${url}/${article.path}`}>Read</Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default Blog;