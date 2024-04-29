import Image from "next/image";

export default function ProductCard({ title, descriptions, price, image }: { title: string, descriptions: string, price: number, image: string }) {
    return (
        <div className="flex justify-center bg-yellow-200 m-6 rounded-xl">
            <div className="m-6">
                <figure>
                    <Image
                        src={`/${image}`}
                        alt={title}
                        width={300}
                        height={300}
                    />
                </figure>
                <h1 className="m-2">{title}</h1>
                <p className="m-2">{descriptions}</p>
                <span className="m-2">{price} kr</span>
            </div>
        </div>
    );
}
