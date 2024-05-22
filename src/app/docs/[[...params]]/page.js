"use client";
import {usePathname} from "next/navigation";

export default function Doc() {
    const rout = usePathname();
    const editedRout = rout.split("/").filter((el , i) => i!==0 && i!==1);
    const featureId = editedRout[0];
    const conceptId = editedRout[1];
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="font-bold text-6xl">feature number {featureId}</h1>
                <h1 className="font-bold text-6xl">concept number {conceptId}</h1>
            </div>
        </main>
    );
}