/* eslint-disable react/prop-types */
export function ProductCard({ product }) {
	return (
		<div className="w-[300px] rounded-xl bg-[#1F1F27] text-white flex-1">
			<div className="px-8 pt-8 pb-4 flex justify-center">
				<img
					src={product.image}
					alt="Laptop"
					className="h-[200px] w-auto rounded-xl border-8 border-white  "
				/>
			</div>
			<div className="p-4">
				<h1 className="text-lg font-semibold text-center">{product.title}</h1>
				<p className="mt-3 text-lg text-center">Price: {product.price}</p>
				<div className="flex justify-center items-center gap-5 mt-6 mb-3">
					<button
						type="button"
						className=" rounded-lg bg-white px-3 py-1.5 text-[15px] font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
					>
						Add to Cart
					</button>
					<button
						type="button"
						className=" rounded-lg bg-white px-3 py-1.5 text-[15px] font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
					>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
}
