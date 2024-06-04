'use client';
import {useRouter} from "next/navigation";
import Counter from "../components/counter/Counter";
import Button from "../components/button/Button";
import backImg from "../../public/images/mainPage/backGrImg.jpg"


export default function Home() {
    const rout = useRouter();
    const handleGoGallery = () => {
        rout.push("/gallery");
    }
    return (
        <main style= {{ backgroundImage: `url(${backImg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            <div>
                <h1 className="font-bold text-6xl">Newborn Darling Coming Soon</h1>
            </div>
            <Counter deadlineDate={new Date('2025-01-25T12:00:00')}/>
            <Button handleClick={handleGoGallery} color="red-300">Go To Galley</Button>
        </main>
    );
}
