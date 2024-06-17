import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Astrobin",
    url: "https://www.astrobin.com/users/Rouvi05/",
    handle: "Rouven",
  },
  {
    id: 2,
    name: "ClodyNights",
    url: "https://www.cloudynights.com/ilwyennefer",
    handle: "Rouven",
  },
];

const title = "ILW Yennefer";
const description =
  "Full-Stack Software Engineer 🧑🏻‍💻 working with cutting-edge stuff.";
const image =
  "https://yt3.ggpht.com/VoEBu0KxtQkfWretx-3_NqxKnoLqfKNTtWq0KFigdqaqVQFz8CggKgqkcxXqCDW7zYWlZZJOuQ=s108-c-k-c0x00ffffff-no-rj";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://ilwyennefer.com",
    siteName: "ILW Yennefer",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    images: [image],
    creator: "@YenneferIlw",
  },
};
