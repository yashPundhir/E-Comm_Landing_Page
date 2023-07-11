import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";

const ProductsList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-center my-10 px-10">
			{products.map((product) => (
				<div
					key={product.id}
					className="flex flex-col justify-center items-center rounded-lg border-[3px] border-white py-6 px-4"
				>
					<ProductCard product={product} />
				</div>
			))}
		</div>
	);
};

export default ProductsList;
