import Link from "next/link";

export default function Gallery() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="font-bold text-6xl">Gallery of Pictures</h1>
                <div>
                    <Link href="/gallery/baby">
                        Baby Gallery
                    </Link>
                </div>
                <div>
                    <Link href="/gallery/parents">
                        Parents Gallery
                    </Link>
                </div>
            </div>
        </main>
    );
}
