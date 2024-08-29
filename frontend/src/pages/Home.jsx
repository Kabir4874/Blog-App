import Blogs from "../components/blogs/Blogs";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <div className="bg-white text-primary container mx-auto mt-8 p-8">
      <Hero />
      <Blogs />
    </div>
  );
};

export default Home;
