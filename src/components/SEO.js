import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: 'Merits Academy - Find the Best Courses and Teachers',
  description: 'Join our community of learners and educators to find the best courses, teachers, and educational resources.',
  keywords: 'education, courses, teachers, learning, online education, merits academy'
};

export default SEO;