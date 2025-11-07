// Navigation items
export const navItems: { label: string; href: string }[] = [];

// Footer links
export const footerLinks = [
  { label: "Contact", href: "/contact" }
];

// Social media links
export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/deep-variance",
    icon: "linkedin" as const
  },
  {
    name: "GitHub",
    href: "https://github.com/deepvariance",
    icon: "github" as const
  }
];

// Research areas
export const researchAreas = [
  {
    title: "Deep Learning & Neural Networks",
    description:
      "Advancing neural architecture design, optimization techniques, and understanding the theoretical foundations of deep learning systems.",
    tags: ["Neural Networks", "Optimization", "Architecture Search"],
    icon: "Brain" as const
  },
  {
    title: "Computer Vision",
    description:
      "Developing state-of-the-art vision systems for object detection, image generation, and visual understanding applications.",
    tags: ["Object Detection", "Image Generation", "Visual AI"],
    icon: "Eye" as const
  },
  {
    title: "Natural Language Processing",
    description:
      "Creating intelligent language models that understand, generate, and reason with human language at scale.",
    tags: ["Language Models", "Text Generation", "Understanding"],
    icon: "MessageCircle" as const
  },
  {
    title: "AI Safety & Ethics",
    description:
      "Ensuring AI systems are safe, fair, and aligned with human values through rigorous research and testing.",
    tags: ["Safety", "Ethics", "Fairness", "Alignment"],
    icon: "Shield" as const
  }
];

// Team members
export const teamMembers = [
  {
    name: "Girish M S",
    role: "Founder & CEO",
    image: "girish-m-saraswathipura.jpg",
    social: [
      {
        platform: "Email",
        url: "mailto:founders@deepvariance.com",
        icon: "email" as const
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/girish-m-s/",
        icon: "linkedin" as const
      },

      {
        platform: "GitHub",
        url: "https://github.com/girish-m-s",
        icon: "github" as const
      }
    ]
  },
  {
    name: "Saai Vignesh",
    role: "Head of Engineering",
    image: "saaivignesh-premanand.jpg",
    social: [
      {
        platform: "Email",
        url: "mailto:founders@deepvariance.com",
        icon: "email" as const
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/saaivigneshp",
        icon: "linkedin" as const
      },
      {
        platform: "GitHub",
        url: "https://github.com/saaivignesh20",
        icon: "github" as const
      }
    ]
  },
  {
    name: "Rohan Kottamasu",
    role: "Co-Founder & Marketing",
    image: "rohan-kottamasu.jpg",
    social: [
      {
        platform: "Email",
        url: "mailto:rohan.kottamasu@deepvariance.com",
        icon: "email" as const
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/rohankottamasu/",
        icon: "linkedin" as const
      }
    ]
  },
  {
    name: "Amit Subhash",
    role: "Research Scientist",
    image: "amit-subhash.jpg",
    social: [
      {
        platform: "Email",
        url: "mailto:founders@deepvariance.com",
        icon: "email" as const
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/amitsubhash/",
        icon: "linkedin" as const
      },
      {
        platform: "GitHub",
        url: "https://github.com/amitsubhash",
        icon: "github" as const
      }
    ]
  }
];
