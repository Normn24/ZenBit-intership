import React from "react";
import { useGetDealsQuery } from "../store/apiSlice";
import DealCard from "../components/DealCard";

const DealsPage: React.FC = () => {
  const { data: deals, isLoading, isError } = useGetDealsQuery();

  if (isLoading) {
    return <div className="p-8 text-center">Loading deals...</div>;
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-500">Error fetching deals.</div>
    );
  }

  return (
    <div className="p-8 md:px-20 md:py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#B29F7E]">Open Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {deals?.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
