import Image from "next/image";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <article className="flex flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <section className="flex flex-col items-center justify-center w-full mt-5">
                    <h1 className="text-3xl font-bold">Om Honey Market</h1>
                </section>
                <section className="flex flex-col items-center justify-center w-full mt-5">
                    <p className="text-lg whitespace-pre-wrap mt-4">Med en passion for honning og en forpligtelse til kvalitet og bæredygtighed formidler vi med stolthed den fineste honning fra vores eksklusive netværk af selvstændige biavlere direkte til dig. <br />Vores virksomhed bygger på et fundament af tillid, ærlighed og respekt for både naturen og vores kunder.</p>
                    <p className="text-lg whitespace-pre-wrap mt-12">Vi arbejder tæt sammen med vores dygtige freelance biavlere, som deler vores vision om at levere honning af højeste kvalitet, produceret med omhu og ekspertise. <br />Hver dråbe honning, vi tilbyder, er et resultat af vores dedikation til at opretholde strenge standarder og sikre en uforlignelig smagsoplevelse. <br />Velkommen til vores verden af førsteklasses honning, hvor vores engagement i bæredygtighed og ekspertise skinner igennem hvert eneste glas.</p>
                </section>
            </article>
        </main>
    );
}
