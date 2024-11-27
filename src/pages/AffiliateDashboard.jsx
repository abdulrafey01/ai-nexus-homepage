import axios from "axios";
import React, { useEffect } from "react";

export default function AffiliateDashboard() {
  const [affiliateData, setAffiliateData] = React.useState([]);

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
                date: log.date,
              },
            ]);
          });
        });
      } catch (error) {}
    };

    fetchAffiliateData();
  }, []);

  useEffect(() => {
    console.log(affiliateData);
  }, [affiliateData]);

  const calculateTotalRevenue = (data) => {
    return data.reduce((total, item) => {
      const revenue = parseFloat(item.revenue);
      return total + revenue;
    }, 0);
  };

  const calculateTotalSales = (data) => {
    return data.reduce((total, item) => total + item.sales, 0);
  };

  const countDistinctProducts = (data) => {
    const products = data.map((item) => item.product);
    const distinctProducts = new Set(products);
    return distinctProducts.size;
  };

  return (
    <div className="flex justify-center items-start min-h-screen p-4 ">
      <div className="w-full lg:text-base sm:text-sm text-xs border-2 bbg-gray-200 rounded-md p-2 flex flex-col">
        {/* Table Head */}
        <div className="bg-black p-4 flex justify-between items-center text-white">
          <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">
            User
          </p>
          <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">
            Product
          </p>
          <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">
            Sales
          </p>
          <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">
            Type
          </p>
          <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">Fee</p>
          <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">
            Revenue
          </p>
          <p className="font-semibold lg:w-36 sm:w-20 w-10  break-words">
            Date
          </p>
        </div>
        {/* Table Body */}
        {affiliateData.map((item, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-gray-200" : "bg-white"
            } p-4 flex justify-between items-center`}
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
