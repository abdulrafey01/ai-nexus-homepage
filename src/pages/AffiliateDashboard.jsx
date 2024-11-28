import axios from "axios";
import React, { useEffect } from "react";
import UpArrow from "../assets/up-arrow-white.svg";
import DownArrow from "../assets/down-arrow-white.svg";

export default function AffiliateDashboard() {
  const [affiliateData, setAffiliateData] = React.useState([]);
  const [selectedColumn, setSelectedColumn] = React.useState({
    index: 1,
    order: "desc",
  });
  useEffect(() => {
    const fetchAffiliateData = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_SERVER_BASE_URL + "/all-affiliate-logs"
        );
        response.data.forEach((person, index) => {
          person.logs?.forEach((log) => {
            setAffiliateData((prevData) => [
              ...prevData,
              {
                email: person.email,
                product: log.product,
                sales: log.sales,
                revenue: log.revenue,
                type: log.type,
                fee: log.fee,
                date: new Date(log.date).toLocaleDateString(),
              },
            ]);
          });
        });
      } catch (error) {}
    };

    fetchAffiliateData();
  }, []);

  const handleSort = (index, field) => {
    let newOrder;
    if (index === selectedColumn.index) {
      newOrder = selectedColumn.order === "asc" ? "desc" : "asc";
    } else {
      newOrder = "desc";
    }

    setSelectedColumn({ index, order: newOrder });

    setAffiliateData((prevData) => {
      const sortedData = [...prevData]; // Avoid mutating the original state
      if (["sales", "fee", "revenue"].includes(field)) {
        // Numeric fields
        sortedData.sort((a, b) =>
          newOrder === "asc" ? a[field] - b[field] : b[field] - a[field]
        );
      } else if (field === "date") {
        sortedData.sort((a, b) =>
          newOrder === "asc"
            ? new Date(a[field]) - new Date(b[field])
            : new Date(b[field]) - new Date(a[field])
        );
      } else {
        // String fields
        sortedData.sort((a, b) =>
          newOrder === "asc"
            ? b[field].localeCompare(a[field])
            : a[field].localeCompare(b[field])
        );
      }
      return sortedData;
    });
  };

  return (
    <div className="flex justify-center items-start min-h-screen p-4 ">
      <div className="w-full lg:text-base sm:text-sm text-xs border-2  rounded-md p-2 flex flex-col overflow-auto">
        {/* Table Head */}
        <div className="bg-black p-4 flex justify-between items-center select-none text-white min-w-[30rem]">
          <div
            onClick={() => {
              handleSort(1, "email");
            }}
            className="flex flex-col sm:flex-row justify-start items-center font-semibold lg:w-36 sm:w-20 w-10 cursor-pointer gap-2 md:gap-4  break-words"
          >
            <p>User</p>
            {
              selectedColumn.index === 1 ? (
                selectedColumn.order === "asc" ? (
                  <img
                    src={UpArrow}
                    alt="Ascending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                ) : (
                  <img
                    src={DownArrow}
                    alt="Descending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                )
              ) : null // No arrow for inactive columns
            }
          </div>
          <div
            onClick={() => {
              handleSort(2, "product");
            }}
            className="flex flex-col sm:flex-row justify-start items-center font-semibold lg:w-36 sm:w-20 w-10 cursor-pointer gap-2 md:gap-4  break-words"
          >
            <p>Product</p>
            {
              selectedColumn.index === 2 ? (
                selectedColumn.order === "asc" ? (
                  <img
                    src={UpArrow}
                    alt="Ascending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                ) : (
                  <img
                    src={DownArrow}
                    alt="Descending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                )
              ) : null // No arrow for inactive columns
            }
          </div>
          <div
            onClick={() => {
              handleSort(3, "sales");
            }}
            className="flex flex-col sm:flex-row justify-start items-center font-semibold lg:w-36 sm:w-20 w-10 cursor-pointer gap-2 md:gap-4  break-words"
          >
            <p>Sales</p>
            {
              selectedColumn.index === 3 ? (
                selectedColumn.order === "asc" ? (
                  <img
                    src={UpArrow}
                    alt="Ascending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                ) : (
                  <img
                    src={DownArrow}
                    alt="Descending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                )
              ) : null // No arrow for inactive columns
            }
          </div>
          <div
            onClick={() => {
              handleSort(4, "type");
            }}
            className="flex flex-col sm:flex-row justify-start items-center font-semibold lg:w-36 sm:w-20 w-10 cursor-pointer gap-2 md:gap-4  break-words"
          >
            <p>Type</p>
            {
              selectedColumn.index === 4 ? (
                selectedColumn.order === "asc" ? (
                  <img
                    src={UpArrow}
                    alt="Ascending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                ) : (
                  <img
                    src={DownArrow}
                    alt="Descending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                )
              ) : null // No arrow for inactive columns
            }
          </div>
          <div
            onClick={() => {
              handleSort(5, "fee");
            }}
            className="flex flex-col sm:flex-row justify-start items-center font-semibold lg:w-36 sm:w-20 w-10 cursor-pointer gap-2 md:gap-4  break-words"
          >
            <p>Fee</p>
            {
              selectedColumn.index === 5 ? (
                selectedColumn.order === "asc" ? (
                  <img
                    src={UpArrow}
                    alt="Ascending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                ) : (
                  <img
                    src={DownArrow}
                    alt="Descending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                )
              ) : null // No arrow for inactive columns
            }
          </div>
          <div
            onClick={() => {
              handleSort(6, "revenue");
            }}
            className="flex flex-col sm:flex-row justify-start items-center font-semibold lg:w-36 sm:w-20 w-10 cursor-pointer gap-2 md:gap-4  break-words"
          >
            <p>Revenue</p>
            {
              selectedColumn.index === 6 ? (
                selectedColumn.order === "asc" ? (
                  <img
                    src={UpArrow}
                    alt="Ascending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                ) : (
                  <img
                    src={DownArrow}
                    alt="Descending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                )
              ) : null // No arrow for inactive columns
            }
          </div>
          <div
            onClick={() => {
              handleSort(7, "date");
            }}
            className="flex flex-col sm:flex-row justify-start items-center font-semibold lg:w-36 sm:w-20 w-10 cursor-pointer gap-2 md:gap-4  break-words"
          >
            <p>Date</p>
            {
              selectedColumn.index === 7 ? (
                selectedColumn.order === "asc" ? (
                  <img
                    src={UpArrow}
                    alt="Ascending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                ) : (
                  <img
                    src={DownArrow}
                    alt="Descending"
                    className="w-2 h-2 lg:w-5 lg:h-5"
                  />
                )
              ) : null // No arrow for inactive columns
            }
          </div>
        </div>
        {/* Table Body */}
        {affiliateData.map((item, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-gray-200" : "bg-white"
            } p-4 flex justify-between items-center  min-w-[30rem]`}
          >
            <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words ">
              {item.email}
            </p>
            <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words ">
              {item.product}
            </p>
            <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">
              {item.sales}
            </p>
            <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">
              {item.type}
            </p>
            <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">
              {item.fee * 100} %
            </p>
            <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">
              ${item.revenue}
            </p>
            <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
