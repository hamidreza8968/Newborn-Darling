import React, { useState, useEffect } from 'react';
export default function Counter({deadlineDate}) {
    const calculateTimeDifference = () => {
        const now = new Date();
        const difference = deadlineDate - now;
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        return { months, days, hours };
    };
    const [timeDifference, setTimeDifference] = useState(calculateTimeDifference());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeDifference(calculateTimeDifference());
        }, 1000); // Update every second
        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, []);

    return(
        <div>
            <div className="flex gap-24">
                <div className="flex flex-col gap-6 items-center">
                    <div className="flex gap-6">
                        <div className="bg-red-300 p-8 text-9xl text-black font-bold">{Math.floor(timeDifference.months / 10)}</div>
                        <div className="bg-red-300 p-8 text-9xl text-black font-bold">{timeDifference.months % 10}</div>
                    </div>
                    <p className="text-5xl font-bold">Months</p>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <div className="flex gap-6">
                        <div className="bg-red-300 p-8 text-9xl text-black font-bold">{Math.floor(timeDifference.days / 10)}</div>
                        <div className="bg-red-300 p-8 text-9xl text-black font-bold">{timeDifference.days % 10}</div>
                    </div>
                    <p className="text-5xl font-bold">Days</p>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <div className="flex gap-6">
                        <div className="bg-red-300 p-8 text-9xl text-black font-bold">{Math.floor(timeDifference.hours / 10)}</div>
                        <div className="bg-red-300 p-8 text-9xl text-black font-bold">{timeDifference.hours % 10}</div>
                    </div>
                    <p className="text-5xl font-bold">Hours</p>
                </div>
            </div>
        </div>
    )
}