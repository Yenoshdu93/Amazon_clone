import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";
import Head from "next/head";

const Home = ({ productsData }) => {
  return (
    <div>
      <Head>
        <title>Amazon a shopping Cart where you can find any thing.</title>
        <link
          rel="icon"
          href="https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1632523695"
        />
      </Head>
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
