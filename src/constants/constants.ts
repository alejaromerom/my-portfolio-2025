import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandWhatsapp,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandCss3,
  IconBrandTypescript,
} from "@tabler/icons-react";

export const constants = {
  navigation: [
    { name: "About me", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Technologies", href: "/technologies" },
    { name: "Contact me", href: "/contact" },
  ],
  redes: [
    {
      name: "GitHub",
      icon: IconBrandGithub,
      href: "https://github.com/alejaromerom",
    },
    {
      name: "LinkedIn",
      icon: IconBrandLinkedin,
      href: "https://linkedin.com/in/alejaromerom",
    },
    {
      name: "Gmail",
      icon: IconBrandGmail,
      href: "mailto:aleromero43@gmail.com",
    },
    {
      name: "WhatsApp",
      icon: IconBrandWhatsapp,
      href: "http://wa.me/573136267365",
    },
  ],
  tech: [
    { name: "JavaScript", icon: IconBrandJavascript },
    { name: "React", icon: IconBrandReact },
    { name: "Node JS", icon: IconBrandNodejs },
    { name: "TypeScript", icon: IconBrandTypescript },
    { name: "CSS3", icon: IconBrandCss3 },
  ],
};
