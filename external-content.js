import { useEffect, useState } from 'react';

export default function ExternalContent() {
  const [content, setContent] = useState('Loading content...');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/fetch-content');
        const data = await response.text();
        setContent(data);
      } catch (error) {
        console.error('Error loading content:', error);
        setContent('Failed to load content.');
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <h1>External Content</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
