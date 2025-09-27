export const seoConfig = {
  title: "DeepVariance Research Lab - Advancing AI Research",
  siteName: "DeepVariance Research Lab",
  description:
    "DeepVariance is an AI research lab pioneering data science and computational intelligence to build scalable, cost-effective AI pipelines.",
  url: "https://deepvariance.com",
  keywords: [
    "artificial intelligence",
    "machine learning",
    "deep learning",
    "neural networks",
    "computer vision",
    "natural language processing",
    "research lab",
    "AI safety",
    "reinforcement learning",
    "quantum machine learning",
    "scientific research",
    "technology innovation",
  ],
  ogImage: {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "DeepVariance Research Lab - Advancing AI Research",
  },
};

export const generateMetadata = (page: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}) => {
  const title = page.title
    ? `${page.title} | ${seoConfig.siteName}`
    : seoConfig.title;

  const description = page.description || seoConfig.description;
  const keywords = page.keywords
    ? [...seoConfig.keywords, ...page.keywords]
    : seoConfig.keywords;
  const image = page.image || seoConfig.ogImage.url;
  const url = page.url ? `${seoConfig.url}${page.url}` : seoConfig.url;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title,
      description,
      url,
      siteName: seoConfig.siteName,
      images: [
        {
          url: `${seoConfig.url}${image}`,
          width: seoConfig.ogImage.width,
          height: seoConfig.ogImage.height,
          alt: seoConfig.ogImage.alt,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${seoConfig.url}${image}`],
      creator: "@deepvariance",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};
