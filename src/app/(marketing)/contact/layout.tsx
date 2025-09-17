import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contattaci",
  description: "Mettiti in contatto con noi per qualsiasi domanda o informazione.",
  openGraph: {
    title: "Contattaci",
    description: "Mettiti in contatto con noi per qualsiasi domanda o informazione.",
  },
};
export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}