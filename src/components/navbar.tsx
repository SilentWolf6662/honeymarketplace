import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-center bg-yellow-200">
            <menu className="flex justify-center items-center gap-10 p-5">
                <li>
                    <Image src="/honeycomb.png"
                        alt="Honey Market"
                        width={32}
                        height={32} />
                </li>
                <li>
                    <Link href="/">Forside</Link>
                </li>
                <li>
                    <Link href="/about">Om os</Link>
                </li>
                <li>
                    <Link href="/contact">Kontakt os</Link>
                </li>
                <li>
                    <Link href="/products">Produkter</Link>
                </li>
                <li>
                    <Link href="/register">Registrer</Link>
                </li>
            </menu>
        </nav>
    );
}
