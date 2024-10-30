import { Metadata } from 'next';
import MainHome from '../components/home/MainHome';
import Services from '../components/home/Services';
import AboutHome from '../components/home/AboutHome';
import Portfolio from '../components/home/Portfolio';
import WorksProcess from '../components/layout/WorksProcess';
import Counter from '../components/layout/Counter';
import Testimonial from '../components/home/Testimonial';
import Faq from '../components/home/Faq';
import Hire from '../components/layout/Hire';
import BlogHome from '../components/home/BlogHome';
import Partner from '../components/layout/Partner';
 
export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Trang chủ của công ty",
  openGraph: {
    title: "Trang chủ",
    description: "Trang chủ của công ty",
    url: "https://yourwebsite.com",
  },
  keywords: ["Trang chủ", "công ty", "tên công ty"],
};

export default function HomePage() {
  return (
    <div className="home-page-next">
      <MainHome />
      <Services />
      <AboutHome />
      <Portfolio />
      <WorksProcess />
      <Counter />
      <Testimonial />
      <Faq />
      <Hire />
      <BlogHome />
      <Partner />
    </div>
  );
}