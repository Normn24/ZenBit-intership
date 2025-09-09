import React from "react";
import type { Deal } from "../../types/types";

interface DealCardProps {
  deal: Deal;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US").format(price);
};

const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  return (
    <div
      className="relative text-white  overflow-hidden h-90 bg-cover bg-center"
      style={{ backgroundImage: `url(${deal.imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/40 p-3 md:p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold">{deal.title}</h3>

        <div className="mt-4 grid md:grid-cols-3 grid-cols-2 gap-y-2 font-bold  text-sm md:text-base">
          <span>{formatPrice(deal.price)}</span>
          <span>Yield {deal.yieldPercentage}%</span>
          <span>Days left {deal.daysLeft}</span>

          <span>Ticket - {formatPrice(deal.ticketPrice)} Dhs</span>
          <span>Sold {deal.soldPercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
