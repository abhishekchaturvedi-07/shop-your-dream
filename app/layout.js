import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";

import TopNav from "@/components/TopNav";

export const metadata = {
  title: "Shop Your Dream",
  description:
    "Shop-Your-Dream: Your Dream, Our Store. Explore and shop for fashion, tech, home decor, and gifts. Dreams delivered to your doorstep!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
