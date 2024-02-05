import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Navbar />
      <HomePage />
      <Footer />
    </main>
  );
}
