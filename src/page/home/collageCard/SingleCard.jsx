import { Link } from "react-router-dom";

const SingleCard = ({ item }) => {
  console.log(item);
  const {
    admission_dates,
    admission_process,
    college_details,
    college_image,
    college_name,
    events,
    research_history,
    research_works,
    sports,
    _id,
  } = item;
  return (
    <div>
      <img
        className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
        src={college_image}
        alt=""
      />

      <div className="mt-8">
        <span className="text-blue-500 uppercase">{college_name}</span>

        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          What do you want to know about UI
        </h1>

        <ul>
          <li>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {" "}
              ✰ {research_history}
            </p>
          </li>
        </ul>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300  hover:text-gray-500">
              Admition Date
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Start {admission_dates.fall_semester.start_date}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              End {admission_dates.fall_semester.end_date}
            </p>
          </div>

          <Link
          to={`/colleges/details/${_id}`}
            className="inline-block text-blue-500 underline hover:text-blue-400"
          >
            view details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
