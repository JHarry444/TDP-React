import { useState } from "react";


const Converter = () => {

    const [miles, setMiles] = useState(0);
    const [kms, setKms] = useState(0);

    const updateMiles = (e) => {
        setMiles(e.target.value);
        setKms(e.target.value * 1.6)
    }

    const updateKms = (e) => {
        setKms(e.target.value);
        setMiles(e.target.value / 1.6)
    }

    return (
        <>
            <input type="number" value={miles} onChange={updateMiles}/>
            <input type="number" value={kms} onChange={updateKms}/>
        </>
    );
}