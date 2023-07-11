import "./App.css";
import ProductsList from "./components/ProductsList";

function App() {
	return (
		<div>
			<div className="flex flex-col justify-center items-center w-screen bg-[#1B1C21] text-white">
				<h1 className="my-5 text-3xl font-semibold">All Products</h1>
			</div>
			<ProductsList />
		</div>
	);
}

export default App;
