import markdownStyles from "./markdown-styles.module.css";
import { PortableText } from "@portabletext/react";
import ReactMarkdown from 'react-markdown';

export default function PostBody({ content }) {
  console.log('texto', content)
  return (
    <div className="max-w-2xl mx-auto" className={markdownStyles.markdown}>
      {/* <PortableText value={content} /> */}
      <article>
        <ReactMarkdown children={content}/>
      </article>
    </div>
  );
}
