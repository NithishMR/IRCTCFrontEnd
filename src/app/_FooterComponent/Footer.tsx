import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Twitter,
  LucideIcon,
} from "lucide-react";

// Types
interface FooterNavigationItem {
  title: string;
  links: string[];
}

interface SocialMediaLinkProps {
  icon: LucideIcon;
  bgColor: string;
}

const footerNavigation: FooterNavigationItem[] = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Case Studies", "Reviews", "Updates"],
  },
  {
    title: "Company",
    links: ["About", "Contact Us", "Careers", "Culture", "Blog"],
  },
  {
    title: "Support",
    links: [
      "Getting Started",
      "Help Center",
      "Service Status",
      "Report a Bug",
      "Chat Support",
    ],
  },
  {
    title: "Download",
    links: ["iOS", "Android", "Mac", "Windows", "Chrome"],
  },
];

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  icon: Icon,
  bgColor,
}) => (
  <div
    className={`w-10 h-10 flex items-center justify-center rounded-full ${bgColor} text-white cursor-pointer hover:opacity-90 transition-opacity`}
  >
    <Icon size={20} />
  </div>
);

const SocialMediaBar: React.FC = () => {
  const socialLinks: SocialMediaLinkProps[] = [
    { icon: Facebook, bgColor: "bg-blue-600" },
    { icon: Youtube, bgColor: "bg-red-600" },
    { icon: Instagram, bgColor: "bg-pink-500" },
    { icon: Linkedin, bgColor: "bg-blue-500" },
    { icon: Twitter, bgColor: "bg-blue-400" },
  ];

  return (
    <div className="py-6 mb-2">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <p className="font-medium text-xl text-center md:text-left">
          Get Connected with us on social networks
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link, index) => (
            <SocialMediaLink key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

const NewsletterSection: React.FC = () => (
  <div className="flex flex-col gap-y-7">
    <h3 className="text-xl font-medium">Subscribe to our newsletter</h3>
    <p className="text-gray-600">
      Stay updated with our latest news and updates.
    </p>
    <div className="space-y-4">
      <Input
        type="email"
        placeholder="Enter your email"
        className="rounded-3xl h-12 shadow-lg"
      />
      <Button type="button" className="w-full md:w-auto px-8 py-4 text-md">
        Subscribe
      </Button>
    </div>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="px-4 md:px-6 mt-16 md:mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerNavigation.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-1">
            <NewsletterSection />
          </div>
        </div>
        <div className="mt-16">
          <SocialMediaBar />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
