import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="">
            <h2 className="text-2xl mb-5">All Category</h2>
            {
                categories.map(category => <NavLink
                    to={`/category/${category?.id}`}
                    className="flex flex-col gap-2 px-8 py-4 font-semibold"
                    key={category?.id}>{category?.name}</NavLink>)
            }
        </div>
    );
};

export default LeftNav;