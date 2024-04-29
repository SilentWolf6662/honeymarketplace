import ProductCard from "@/components/productCard";

export default function Contact() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<article className="flex flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<section className="flex flex-col items-center justify-center w-full mt-5">
					<h1 className="text-3xl font-bold">Produkter til salg</h1>
				</section>
				<section className="flex flex-col md:flex-row items-center justify-center w-full mt-5">
					<ProductCard title={"Honning Produkt 1"} descriptions={"Beskrivelse af produkt nr. 1"} price={49} image={"honey.png"} />
					<ProductCard title={"Honning Produkt 1"} descriptions={"Beskrivelse af produkt nr. 1"} price={49} image={"honey.png"} />
					<ProductCard title={"Honning Produkt 1"} descriptions={"Beskrivelse af produkt nr. 1"} price={49} image={"honey.png"} />
					<ProductCard title={"Honning Produkt 1"} descriptions={"Beskrivelse af produkt nr. 1"} price={49} image={"honey.png"} />
				</section>
			</article>
		</main>
	);
}
