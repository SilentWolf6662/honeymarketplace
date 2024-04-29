import Image from "next/image";

export default function Register() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<article className="flex flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<section className="flex flex-col items-center justify-center w-full mt-5">
					<h1 className="text-3xl font-bold">Registrer dig hos Honey Market</h1>
				</section>
				<section className="flex flex-col items-center justify-center w-full mt-5">
					<p className="text-lg">A decentralized marketplace for freelance honning farmers</p>
				</section>
			</article>
		</main>
	);
}
