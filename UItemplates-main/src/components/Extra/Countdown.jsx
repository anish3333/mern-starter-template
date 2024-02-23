import React, { useState, useEffect } from 'react';

function Countdown() {
    const [days, setDays] = useState(90);
    const [hours, setHours] = useState(24);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Update countdown values every second
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                const updatedSeconds = prevSeconds - 1;
                if (updatedSeconds < 0) {
                    setMinutes(prevMinutes => {
                        const updatedMinutes = prevMinutes - 1;
                        if (updatedMinutes < 0) {
                            setHours(prevHours => {
                                const updatedHours = prevHours - 1;
                                if (updatedHours < 0) {
                                    setDays(prevDays => {
                                        if (prevDays === 0 && prevHours === 0 && prevMinutes === 0 && prevSeconds === 0) {
                                            clearInterval(interval); // Stop the countdown
                                        }
                                        return prevDays - 1;
                                    });
                                    return 23;
                                }
                                return 59;
                            });
                            return 59;
                        }
                        return 59;
                    });
                    return 59;
                }
                return updatedSeconds;
            });
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": days }}>{days}</span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": hours }}>{hours}</span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": minutes }}>{minutes}</span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": seconds }}>{seconds}</span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Countdown;
