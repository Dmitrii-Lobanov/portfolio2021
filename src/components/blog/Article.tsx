import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import canvas from '../../assets/blog/canvas.md';

interface Article {
  article: string;
}

const Article: React.FC<Article> = ({ article }):JSX.Element => {
  const [text, setText] = useState<string>('');

  const renderers = {
    code: ({ language, value }: any) => 
      <SyntaxHighlighter style={materialLight} language={language} children={value} />
  };

  useEffect(() => {
    async function getFile() {
      console.log(canvas);
  
      fetch(canvas).then(res => res.text()).then(data => { setText(data) } );
    }

    getFile();
  }, []);

  return (
    <div>
      <ReactMarkdown source={text} plugins={[ gfm ]} className='blog' renderers={renderers} />
    </div>
  )
}

export default Article;