// import  generateMetadata  from 'next';

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: 'Latest News and Updates',
    description: 'Stay updated with the latest news and information',
  };
}