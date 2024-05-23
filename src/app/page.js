'use client';
import {useRouter} from "next/navigation";

export default function Home() {
    const rout = useRouter();
    const handleGoGallery = () => {
        rout.push("/gallery");
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="font-bold text-6xl">Newborn Darling Counter</h1>
          <button className="p-4 bg-red-300 rounded" onClick={handleGoGallery}>Galley</button>
      </div>
    </main>
  );
}
