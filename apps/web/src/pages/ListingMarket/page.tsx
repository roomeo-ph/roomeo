import { useState } from "react";
import Header from "@/web/widgets/Header";
import ListingBrowseSavedToggle from "@/web/features/listings-market/ListingBrowseSavedToggle";
import ListingSearchFilterBar from "@/web/features/listings-market/ListingSearchFilterBar";
import ListingCategoryBar from "@/web/features/listings-market/ListingCategoryBar";
import ListingBoard from "@/web/features/listings-market/ListingBoard";

export default function ListingMarket() {
  // const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  return (
    <main className="max-h-screen max-y-screen flex flex-col gap-y-[1.25rem] background pt-[4.3125rem] px-[1.6875rem]">
      <Header />
      <ListingBrowseSavedToggle />
      <ListingSearchFilterBar />
      <ListingCategoryBar />
      <ListingBoard />
    </main>
  );
}
