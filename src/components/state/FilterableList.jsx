import { useState } from "react";

const trainers = ["JH", "JB", "ER", "AS", "PB"];

const FilterableList = () => {
    const [search, setSearch] = useState("");

    const filtered = [];

    for (let trainer of trainers) {
        if (trainer.toLowerCase().startsWith(search.toLowerCase())) filtered.push(trainer);
    }

    return ( 
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <p>{filtered.join(", ")}</p>
        </div>
     );
}

export default FilterableList;