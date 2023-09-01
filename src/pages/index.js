import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";

const Home = ({ productsData }) => {
  return (
    <div>
      <Header />
      <main className="text-red-50">
        <Banner />
        <ProductFeed products={productsData} />
      </main>
      <Footer />
    </div>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const productsData = await res.json();
  return { props: { productsData } };
};
