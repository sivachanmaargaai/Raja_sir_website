import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import Story from './components/sections/Story';
import Ventures from './components/sections/Ventures';
import IntelligentProducts from './components/sections/IntelligentProducts';
import Book from './components/sections/Book';
import Insights from './components/sections/Insights';
import NextChapter from './components/sections/NextChapter';
import BeyondAndBeliefs from './components/sections/BeyondAndBeliefs';
import Connect from './components/sections/Connect';

export default function App() {
  return (
    <div id="top">
      <a
        href="#main"
        className="fixed top-2 left-2 z-[100] -translate-y-24 rounded bg-ink px-5 py-3 text-paper focus:translate-y-0"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Story />
        <Ventures />
        <IntelligentProducts />
        <Book />
        <Insights />
        <NextChapter />
        <BeyondAndBeliefs />
        <Connect />
      </main>

      <Footer />
    </div>
  );
} 