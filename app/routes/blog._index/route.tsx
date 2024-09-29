import { Link, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

//the "view all" page of blog content
// read time function
function estimateReadTime(content: string): string {
  const wordsReadMinute: number = 175;
  const wordCount: number = content.split(/\s+/).length;
  const readTime: number = Math.ceil(wordCount / wordsReadMinute);
  return `${readTime} min read`;
}

export async function loader() {
  const __filename: string = fileURLToPath(import.meta.url);
  const __dirname: string = path.dirname(__filename);

  // markdown files on app directory app/blog/*.md
  const blogDirectory: string = path.join(__dirname, '../../blog');

  type BlogPost = {
    title: string;
    filename: string;
    date: string;
    readTime: string;
  };

  let blogPosts: {
    title: string;
    filename: string;
    date: string;
    readTime: string;
  }[] = [];

  if (fs.existsSync(blogDirectory)) {
    const files: string[] = fs.readdirSync(blogDirectory);

    blogPosts = files
      .filter((file: string) => file.endsWith('.md'))
      .map((file: string) => {
        //get date and title from filename of markdown file "YEAR-MN-DY-filename"
        const [year, month, day] = file.split('-').slice(0, 3);
        const dateObj: Date = new Date(
          Number(year),
          Number(month) - 1,
          Number(day)
        );

        const formattedDate: string = dateObj.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit', //leading zeroes
        });

        // transforms "1999-03-12-MyBlog.md" -> "MyBlog" -> "My Blog"
        const rawTitle: string = file
          .replace(/\.md$/, '')
          .split('-')
          .slice(3)
          .join(' ');
        const title: string = rawTitle.replace(/([A-Z])/g, ' $1').trim();

        const filePath: string = path.join(blogDirectory, file);
        const fileContent: string = fs.readFileSync(filePath, 'utf-8');
        const readTime: string = estimateReadTime(fileContent);

        return { title, filename: file, date: formattedDate, readTime };
      })
      .sort((a: BlogPost, b: BlogPost) => {
        const dateA: number = new Date(a.date).getTime();
        const dateB: number = new Date(b.date).getTime();
        return dateB - dateA;
      });
  }

  return json(blogPosts);
}

export default function Route() {
  const blogPosts =
    useLoaderData<
      { title: string; filename: string; date: string; readTime: string }[]
    >();

  return (
    <>
      {/* labels */}
      <div className="flex justify-between items-center py-2 border-b border-gray-500 border-opacity-50 ">
        <div className="flex space-x-4">
          <span className="text-gray-500 text-sm">date</span>
          <span className="text-gray-500 text-sm pl-12">title</span>
        </div>
        <span className="text-gray-500 text-sm">read time</span>
      </div>

      {/* clickable list w/ date title readtime*/}
      <ul className="space-y-1">
        {blogPosts.map((post, index: number) => {
          const postPath = `/blog/${post.filename.replace(/\.md$/, '')}`;
          return (
            <li
              key={post.filename}
              className={
                index < blogPosts.length - 1
                  ? 'border-b border-gray-500 border-opacity-50'
                  : ''
              }
            >
              <Link
                to={postPath}
                className="flex justify-between items-center py-2 hover:bg-gray-700"
              >
                <div className="flex space-x-4">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <span className="text-white-600 text-sm">{post.title}</span>
                </div>
                <span className="text-gray-500">{post.readTime}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
