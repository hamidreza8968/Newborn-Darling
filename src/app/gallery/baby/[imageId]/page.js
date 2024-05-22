"use client";
import {usePathname} from "next/navigation";
export default function PickedImage() {
    const pathname = usePathname();
    const pathnameArr = pathname.split("/");
    const imageId = pathnameArr[pathnameArr.length-1];
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="font-bold text-6xl">image number {imageId}</h1>
            </div>
        </main>
    );
}