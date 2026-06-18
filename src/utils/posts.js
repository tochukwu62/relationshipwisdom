import { marked } from 'marked';
import matter from 'gray-matter';

// Import all .md files from the posts folder
const postFiles = import.meta.glob('../content/posts/*.md', { as: 'raw', eager: true });

export function getAllPosts() {
  const posts = [];
  for (const path in postFiles) {
    const content = postFiles[path];
    const { data, content: markdownContent } = matter(content);
    const slug = path.split('/').pop().replace(/\.md$/, '');
    posts.push({
      ...data,
      slug,
      content: marked(markdownContent),
      rawContent: markdownContent,
    });
  }
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}