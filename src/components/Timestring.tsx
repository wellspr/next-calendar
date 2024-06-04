"use client"

import { useEffect, useState } from "react";

export default function Timestring() {

    const [timestring, setTimestring] = useState<string>();

    useEffect(() => {
        const today = new Date();

        const run = setInterval(() => {
            setTimestring(today.toTimeString());
        }, 1000);

        return () => {
            clearInterval(run);
        }
    }, [timestring]);

    return (
        <div className="timestring">
            { timestring }
        </div>
    );
}