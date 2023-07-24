import { useLoaderData } from "react-router-dom";

const CollageCardDetails = () => {
  const loadeData = useLoaderData();

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
  } = loadeData;

  console.log("detail page", loadeData);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={college_image}
              alt=""
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-blue-500 ">“</p>

              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                {college_name}
              </h1>
              <p className="max-w-lg mt-2 text-gray-500 dark:text-gray-400 ">
                Start: {admission_dates.fall_semester.start_date}, End:{" "}
                {admission_dates.fall_semester.end_date}
              </p>

              <p className="max-w-lg mt-4 text-gray-500 dark:text-gray-400 ">
                “{admission_process.admission_notification}
                {admission_process.eligibility}
                {admission_process.admission_requirements} ”
              </p>

              <h3 className="mt-6 text-lg font-medium text-blue-500">
                Events details
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {events.hackathon.description}
                {events.innovation_summit.description}
              </p>

              <h3 className="mt-6 text-lg font-medium text-blue-500">
                Research works
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {research_works.work1.title} <br />
                {research_works.work1.author} <br />
                {research_works.work1.description} <br />
                {research_works.work1.publication_date} <br />
              </p>

              <h3 className="mt-6 text-lg font-medium text-blue-500">
                Sports categories
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {sports?.sports_categories.map((sport, index) => {
                  return (
                    <p
                      key={index}
                      className="mt-2 text-gray-500 dark:text-gray-400"
                    >
                      ✰ {sport}
                    </p>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollageCardDetails;
