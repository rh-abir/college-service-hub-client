import { useEffect, useState } from "react";
import SingleCard from "../home/collageCard/SingleCard";

const Colleges = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/collage`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [])


  return (
    <div className="min-h-screen">
      <div className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <hr className="my-8 border-gray-200 " />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
            {data.map((item) => (
              <SingleCard key={item._id} item={item}></SingleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleges;
