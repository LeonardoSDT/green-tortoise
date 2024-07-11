'use client';

import { StreamableValue, useStreamableValue } from 'ai/rsc';
import ReactMarkdown from 'react-markdown';

export function Message({ textStream }: { textStream: StreamableValue }) {
  const [data, error, pending]: [any, any, boolean] = useStreamableValue(textStream);

  // if (pending) return <div>Answering...</div>;
  if (error) return <div>Error: {error.message}</div>;


  const formattedData = data.replace(/【.*?】|\(.*?\)/g, '');

  return (
    <ReactMarkdown
      components={
        {
          h1: ({ node, ...props }) => <h1 className='text-4xl' {...props} />,
          h2: ({ node, ...props }) => <h2 className='text-3xl' {...props} />,
          h3: ({ node, ...props }) => <h3 className='text-2xl' {...props} />,
          h4: ({ node, ...props }) => <h4 className='text-xl' {...props} />,
          h5: ({ node, ...props }) => <h5 className='text-lg' {...props} />,
          h6: ({ node, ...props }) => <h6 className='text-md' {...props} />,
          p: ({ node, ...props }) => <p className='text-base' {...props} />,
          ol: ({ node, ...props }) => <ol className='list-decimal pl-6' {...props} />,
          ul: ({ node, ...props }) => <ul className='list-disc pl-6' {...props} />,
          li: ({ node, ...props }) => <li className='text-base' {...props} />,
          blockquote: ({ node, ...props }) => <blockquote className='text-base' {...props} />,
          code: ({ node, ...props }) => <code className='text-base' {...props} />,
          pre: ({ node, ...props }) => <pre className='text-base' {...props} />,
          a: ({ node, ...props }) => <a className='text-base hover:underline' {...props} />,
        }
      }
    >
      {formattedData}
    </ReactMarkdown>
  );
}