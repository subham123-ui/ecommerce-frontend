import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="qwdcdv"
          name="Apple iPhone 15 Pro Max (256 GB) - Black Titanium Macbook"
          price={159000}
          stock={100}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/81Os1SDWpcL._SX679_.jpg"
          // photo="https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw571911ce/sfcc-graff-staging/G/B/W/1/4/GBW14WGPDD_GBW14WGPDD_hero.jpg?sw=3000&sh=3000"
        />
      </main>
    </div>
  );
};

export default Home;
