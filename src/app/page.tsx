import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<div className="flex flex-col items-center justify-center w-full">
					<Image
						src="/honeycomb.png"
						alt="Honey Market"
						width={300}
						height={300}
					/>
				</div>
				<div className="flex flex-col items-center justify-center w-full mt-5">
					<h1 className="text-3xl font-bold">Honey Market</h1>
					<p className="text-lg">A decentralized marketplace for freelance honning farmers</p>
				</div>
			</div>
		</main>
	);
}
