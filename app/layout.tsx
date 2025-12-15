import "./globals.css";

export const metadata = {
  title: "VectorAlgoAI",
  description: "AI-powered strategy validation for serious traders"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
