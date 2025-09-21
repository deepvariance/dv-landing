// Navigation items
export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Contact', href: '/contact' },
];

// Footer links
export const footerLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Research Areas', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Team', href: '/about#team' },
  { label: 'Contact', href: '/contact' },
  { label: 'Careers', href: '/careers' },
];

// Social media links
export const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/deepvariance',
    icon: 'Twitter' as const,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/deepvariance',
    icon: 'LinkedIn' as const,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/deepvariance',
    icon: 'GitHub' as const,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@deepvariance',
    icon: 'YouTube' as const,
  },
];

// Research areas
export const researchAreas = [
  {
    title: 'Deep Learning & Neural Networks',
    description: 'Advancing neural architecture design, optimization techniques, and understanding the theoretical foundations of deep learning systems.',
    tags: ['Neural Networks', 'Optimization', 'Architecture Search'],
    icon: 'Brain' as const,
  },
  {
    title: 'Computer Vision',
    description: 'Developing state-of-the-art vision systems for object detection, image generation, and visual understanding applications.',
    tags: ['Object Detection', 'Image Generation', 'Visual AI'],
    icon: 'Eye' as const,
  },
  {
    title: 'Natural Language Processing',
    description: 'Creating intelligent language models that understand, generate, and reason with human language at scale.',
    tags: ['Language Models', 'Text Generation', 'Understanding'],
    icon: 'MessageCircle' as const,
  },
  {
    title: 'AI Safety & Ethics',
    description: 'Ensuring AI systems are safe, fair, and aligned with human values through rigorous research and testing.',
    tags: ['Safety', 'Ethics', 'Fairness', 'Alignment'],
    icon: 'Shield' as const,
  },
];

// Team members
export const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Research Director',
    bio: 'Leading expert in deep learning and neural architecture search with 10+ years of experience.',
    interests: ['Deep Learning', 'Neural Networks', 'Optimization', 'Computer Vision'],
    image: null,
    social: [
      {
        platform: 'Twitter',
        url: 'https://twitter.com/sarahchen_ai',
        icon: 'Twitter' as const,
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/sarahchen-ai',
        icon: 'LinkedIn' as const,
      },
    ],
  },
  {
    name: 'Dr. Michael Rodriguez',
    role: 'Principal Scientist',
    bio: 'Specializes in computer vision and AI safety with extensive industry and academic experience.',
    interests: ['Computer Vision', 'AI Safety', 'Robotics', 'Ethics'],
    image: null,
    social: [
      {
        platform: 'Twitter',
        url: 'https://twitter.com/mrodriguez_ai',
        icon: 'Twitter' as const,
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/mrodriguez-ai',
        icon: 'GitHub' as const,
      },
    ],
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Senior Researcher',
    bio: 'Expert in quantum machine learning and optimization with breakthrough contributions to the field.',
    interests: ['Quantum Computing', 'Machine Learning', 'Optimization', 'Algorithms'],
    image: null,
    social: [
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/emilywatson-qml',
        icon: 'LinkedIn' as const,
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/ewatson-qml',
        icon: 'GitHub' as const,
      },
    ],
  },
  {
    name: 'Dr. Alex Kim',
    role: 'Research Scientist',
    bio: 'Focuses on natural language processing and conversational AI with a passion for multilingual systems.',
    interests: ['NLP', 'Language Models', 'Multilingual AI', 'Conversation'],
    image: null,
    social: [
      {
        platform: 'Twitter',
        url: 'https://twitter.com/alexkim_nlp',
        icon: 'Twitter' as const,
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/alexkim-nlp',
        icon: 'LinkedIn' as const,
      },
    ],
  },
];