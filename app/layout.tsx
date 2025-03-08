import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Vercel CSM Exercise - Taylor Watson",
  description: "Digital Success Take-Home Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ background: "#1a1a1a", padding: "10px", textAlign: "center" }}>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", justifyContent: "center", gap: "20px" }}>
            <li>
              <Link href="/q1" style={{ color: "white", textDecoration: "none" }}>
                Question 1 →
              </Link>
            </li>
            <li>
              <Link href="/q2" style={{ color: "white", textDecoration: "none" }}>
                Question 2 →
              </Link>
            </li>
            <li>
              <Link href="/q3" style={{ color: "white", textDecoration: "none" }}>
                Question 3 →
              </Link>
            </li>
            <li>
              <Link href="/q4" style={{ color: "white", textDecoration: "none" }}>
                Question 4 →
              </Link>
            </li>
            <li>
              <Link href="/q5" style={{ color: "white", textDecoration: "none" }}>
                Question 5 →
              </Link>
            </li>
          </ul>
        </nav>
        <main style={{ padding: "20px", background: "black", color: "white", minHeight: "100vh" }}>
          {children}
        </main>
      </body>
    </html>
  );
}