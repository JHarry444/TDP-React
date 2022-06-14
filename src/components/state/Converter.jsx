import {useState} from 'react';

const Converter = () => {

    const [miles, setMiles] = useState(0);
    const [kms, setKms] = useState(0);

    const updateMiles = (event) => {
        const newVal = parseInt(event.target.value);
        setMiles(newVal);
        setKms(newVal * 1.6);
    }

    const updateKms = (event) => {
        const newVal = parseInt(event.target.value);
        setKms(newVal);
        setMiles(newVal / 1.6);
    }
    
    return (
        <>
            <input type="number" value={miles} onChange={updateMiles}/>miles
            { miles === 500 && <p>And I would walk 500 more</p> }
            <br/>
            <input type="number" value={kms} onChange={updateKms}/>kms
        </>
    )
}

export default Converter;