import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#f9f9f9]">
      <h1 className="text-5xl mt-14 mb-8 text-center font-semibold text-sky-500 tracking-wide">
        Product List
      </h1>
      <ProductList />
    </div>
  );
}
