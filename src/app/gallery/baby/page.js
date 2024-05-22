import Link from "next/link";

export default function BabyGallery({imageId=100}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="font-bold text-6xl">Baby Gallery</h1>
                <div className="flex flex-col">
                    <Link href="/gallery/baby/1">
                        image 1
                    </Link>
                    <Link href="/gallery/baby/2">
                        image 2
                    </Link>
                    <Link href="/gallery/baby/3">
                        image 3
                    </Link>
                    <Link href={`/gallery/baby/${imageId}`}>
                        image {imageId}
                    </Link>
                </div>
            </div>
        </main>
    );
}