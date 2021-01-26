import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism';

const Article: React.FC = ():JSX.Element => {
  const [text, setText] = useState<string>('');

  const renderers = {
    code: ({ language, value }: any) => 
      <SyntaxHighlighter style={materialLight} language={language} children={value} />
  };
  
  useEffect(() => {
    async function getFile() {
      const file = await import(`../../assets${window.location.pathname}.md`);
      const response = await fetch(file.default);
      const data = await response.text();
      setText(data);
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