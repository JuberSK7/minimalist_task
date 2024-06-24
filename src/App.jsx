import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Modal from "./components/Modle";
import Banner from "./assets/banner1.png";


const product = {
  name: "Raju Rassibomb",
  price: "Raju’s Dreams/-",
  description_heading: "Product Description:",
  description:
    "This product packs an extra punch, thanks to the literal blood sweat and tears of a young boy.",
  product_content: "Product Contents:",
  product_content_details1: "10 hand-hurting pieces of rassi bombs",
  product_content_details2: "Jilled with great pain",
  product_content_details3: "Raju’s hopes",
  shipping_time: "Shipping Time:",
  shipping_details: "Before Raju understands that his dreams do not matter.",
  images: [Banner, Banner, Banner, Banner],
};
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Hero />
      <About />
      <Product onClickBtn={() => setIsModalOpen(true)} />
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
}

export default App;
