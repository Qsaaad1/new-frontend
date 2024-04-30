import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useTable } from "react-table";
import { useCountry } from "../CountryContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Graph = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const data = shuffleArray([
    { country: "Australia", students: 303, color: "#d62728" },
    { country: "Germany", students: 179, color: "#9467bd" },
    { country: "Norway", students: 16, color: "#8c564b" },
    { country: "United States", students: 277, color: "#2ca02c" },
    { country: "Denmark", students: 6, color: "#7f7f7f" },
    { country: "Netherlands", students: 39, color: "#9467bd" },
    { country: "Singapore", students: 12, color: "#bcbd22" },
    { country: "Ireland", students: 132, color: "#8c564b" },
    { country: "Italy", students: 22, color: "#d62728" },
    { country: "New Zealand", students: 46, color: "#e377c2" },
    { country: "Philippines", students: 36, color: "#7f7f7f" },
    { country: "Canada", students: 504, color: "#1f77b4" },
    { country: "Austria", students: 18, color: "#ff7f0e" },
    { country: "South Korea", students: 10, color: "#e377c2" },
    { country: "United Kingdom", students: 378, color: "#ff7f0e" },
    { country: "France", students: 32, color: "#2ca02c" },
    { country: "Spain", students: 8, color: "#1f77b4" },
    { country: "Russia", students: 24, color: "#17becf" },
]);


  const tableData = [
    {
      country: "Canada",
      cities: 15,
      students: 504,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png",
    },
    {
      country: "UK",
      cities: 12,
      students: 378,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
    },
    {
      country: "USA",
      cities: 10,
      students: 277,
      flag: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
    },
    {
      country: "Australia",
      cities: 9,
      students: 303,
      flag: "https://cdn.britannica.com/78/6078-050-18D5DEFE/Flag-Australia.jpg",
    },
    {
      country: "Germany",
      cities: 17,
      students: 179,
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png",
    },
    {
      country: "Norway",
      cities: 8,
      students: 16,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/640px-Flag_of_Norway.svg.png",
    },
    {
      country: "Denmark",
      cities: 6,
      students: 6,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/640px-Flag_of_Denmark.svg.png",
    },
    {
      country: "Netherlands",
      cities: 11,
      students: 39,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/640px-Flag_of_the_Netherlands.svg.png",
    },
    {
      country: "Singapore",
      cities: 1,
      students: 12,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/640px-Flag_of_Singapore.svg.png",
    },
    {
      country: "Ireland",
      cities: 4,
      students: 132,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/640px-Flag_of_Ireland.svg.png",
    },
    {
      country: "Italy",
      cities: 14,
      students: 22,
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/640px-Flag_of_Italy.svg.png",
    },
    {
      country: "New Zealand",
      cities: 5,
      students: 46,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/640px-Flag_of_New_Zealand.svg.png",
    },
    {
      country: "Philippines",
      cities: 7,
      students: 36,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/640px-Flag_of_the_Philippines.svg.png",
    },
    {
      country: "Austria",
      cities: 3,
      students: 18,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/640px-Flag_of_Austria.svg.png",
    },
    {
      country: "South Korea",
      cities: 13,
      students: 10,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/640px-Flag_of_South_Korea.svg.png",
    },
    {
      country: "France",
      cities: 16,
      students: 32,
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/640px-Flag_of_France.svg.png",
    },
    {
      country: "Spain",
      cities: 9,
      students: 8,
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/640px-Flag_of_Spain.svg.png",
    },
    {
      country: "Russia",
      cities: 20,
      students: 24,
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png",
    },
  ];

  // Table columns
  const columns = [
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "Number of Cities",
      accessor: "cities",
    },
    {
      Header: "Number of Students",
      accessor: "students",
    },
    {
      Header: "Flag",
      accessor: "flag",
    },
  ];

  const { updateSelectedCountry } = useCountry();
  const handleClick = (country) => {
    updateSelectedCountry(country);
  };
  const navigate = useNavigate();
  // Custom table component
  const Table = () => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({
        columns,
        data: tableData,
      });

    return (
      <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md mb-4">
        <div className="max-h-72 overflow-y-auto">
          <table
            {...getTableProps()}
            className="min-w-full bg-white divide-y divide-gray-200"
            style={{ tableLayout: "fixed" }}
          >
            <thead className="bg-gray-100">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider" // Adjusted padding
                      style={{ width: `${100 / headerGroup.headers.length}%` }} // Equal width for each column
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="bg-white divide-y divide-gray-200"
            >
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell, index) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className={`px-3 py-3 whitespace-nowrap text-sm text-gray-900 text-center ${
                            index === 3 ? "text-2xl" : ""
                          }`} // Adjusted padding
                        >
                          {index === 3 ? (
                            <div className="flex justify-center items-center">
                              <img
                                src={cell.value}
                                alt={row.original.country}
                                style={{ width: "40px", height: "auto" }} // Increased width of the flag
                              />
                            </div>
                          ) : index === 0 ? (
                            <Link
                            to="/community"
                            className=" text-gray-900 hover:text-red-600 hover:underline "
                            onClick={() => {
                              handleClick(cell.value); 
                              navigate("/community");
                            }}
                          >
                            {cell.render("Cell")}
                          </Link>
                          
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container mx-auto bg-white mt-10 mb-1 rounded-lg border border-gray-300 shadow-xl">
        <h2 className="text-2xl sm:text-5xl font-bold text-center text-gray-800 pt-10 font-sans">
          Distribution of International Students
        </h2>
        <p className="text-center text-gray-600 mb-6">
          This bar chart shows the distribution of international students across
          different countries.
        </p>
        <div className="overflow-hidden" style={{ height: 400 }}>
          <ResponsiveBar
            data={data}
            keys={["students"]}
            indexBy="country"
            margin={{ top: 50, right: 60, bottom: 90, left: 60 }}
            padding={0.3}
            colors={(bar) => bar.data.color}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -45,
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: "middle",
              legendOffset: -40,
            }}
            enableLabel={false}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            maxValue={550}
            borderRadius={3}
            onClick={(bar) => {
              handleClick(bar.indexValue);
              navigate("/community");
            }}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto ">
        <div className="mt-6">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Graph;
