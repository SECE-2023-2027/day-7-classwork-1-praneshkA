import "./globals.css";

export const metadata = {
  title: "Local Auth App",
  description: "A demo of localStorage authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
