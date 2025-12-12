import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organic Chemistry | EduGenius - Learn Carbon Compounds & Reactions",
  description: "Master organic chemistry concepts including functional groups, isomers, nomenclature, and reaction mechanisms. Interactive lessons on carbon compounds and their applications.",
  keywords: [
    "organic chemistry",
    "functional groups", 
    "isomers",
    "nomenclature",
    "reaction mechanisms",
    "carbon compounds",
    "stereochemistry",
    "IUPAC naming",
    "organic reactions"
  ],
  openGraph: {
    title: "Organic Chemistry - EduGenius",
    description: "Explore the chemistry of carbon compounds with interactive lessons and examples",
    type: "website",
    images: [
      {
        url: "/chemistry-og-image.png",
        width: 1200,
        height: 630,
        alt: "Organic Chemistry Learning Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Organic Chemistry - EduGenius", 
    description: "Master organic chemistry concepts with interactive lessons"
  }
};