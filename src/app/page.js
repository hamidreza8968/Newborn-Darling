'use client';
import {useRouter} from "next/navigation";
import Counter from "../components/counter/Counter";

export default function Home() {
    const rout = useRouter();
    const handleGoGallery = () => {
        rout.push("/gallery");
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="font-bold text-6xl">Newborn Darling Coming Soon</h1>
            </div>
            <Counter deadlineDate={new Date('2025-01-25T12:00:00')}/>
            <button className="p-4 bg-red-300 rounded" onClick={handleGoGallery}>Galley</button>
        </main>
    );
}
