'use client';
import {useRouter} from "next/navigation";

export default function NotFoundPage() {
    const rout = useRouter();
    const handleGoBack = () => {
        rout.back();
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="font-bold text-6xl">This page is not founded!</h1>
                <button className="p-4 bg-red-300 rounded" onClick={handleGoBack}>Go Back</button>
            </div>
        </main>
    );
}