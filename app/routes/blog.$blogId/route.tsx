import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import fs from 'fs';

import path from 'path';
import Markdown from 'react-markdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export async function loader({ params }: { params: { blogId: string } }) {
  //construct file path
  const blogDirectory: string = path.resolve(process.cwd(), 'public');
  const filePath: string = path.join(blogDirectory, `${params.blogId}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Response('404', { status: 404 });
  }

  const fileContent: string = fs.readFileSync(filePath, 'utf-8');

  // h1 heading title extract from .md
  const lines: string[] = fileContent.split('\n');
  const title: string = lines[0].replace('# ', '').trim();

  // get date from blog title/file name
  const dateParts: string[] = params.blogId.split('-').slice(0, 3);
  const formattedDate: string = new Date(
    dateParts.join('-')
  ).toLocaleDateString();

  const markdownContent: string = lines.slice(1).join('\n');

  return json({ markdownContent, title, formattedDate });
}

export default function BlogPost() {
  const { markdownContent, title, formattedDate } = useLoaderData<{
    markdownContent: string;
    title: string;
    formattedDate: string;
  }>();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <h1 className="text-center text-3xl font-bold mb-1 pr-6 ">{title}</h1>
      <p className="text-center text-gray-500 mb-5 text-sm pr-6">
        {formattedDate}
      </p>
      <div className="prose dark:prose-invert ">
        <Markdown>{markdownContent}</Markdown>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-2 bg-black-500 text-white rounded-full shadow-lg hover:opacity-40 transition"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  );
}
