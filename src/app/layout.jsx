import "@/styles/globals.css";

export const metadata = {
  title: "Arogya Sadhana",
  description: "Arogya Sadhana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
