import { useState } from "react";
import Trainer from "../../Trainer";

import Data from "./Data.json";

const FilterableListFull = () => {
    const { trainersFull } = Data;
    const [search, setSearch] = useState("");

    // const filtered = [];

    // for (let trainer of trainers) {
    //     if (trainer.toLowerCase().startsWith(search.toLowerCase())) filtered.push(trainer);
    // }

    const renderedTrainers = trainersFull
                                .filter(trainer => trainer.name.toLowerCase().startsWith(search.toLowerCase()))
                                .map(trainer => <Trainer key={trainer.name + trainer.age} name={trainer.name} age={trainer.age} specialism={trainer.specialism}/>);

    return ( 
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {/* <p>{filtered.join(", ")}</p> */}
            { renderedTrainers }
        </div>
     );
}

export default FilterableListFull;