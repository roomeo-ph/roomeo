import { ScrollArea } from "@/web/shared/components/ui/scroll-area"
import ListingCard from "@/web/entities/listing/ui/ListingCard";
import { MOCKLISTINGS } from "@/web/entities/listing/model/types";

export default function ListingBoard() {
  return (
    <div className="flex flex-col gap-y-[1.25rem]">
      <div className="flex flex-row justify-between -mb-[0.25rem]">
        <p className="text-xs text-muted-foreground">{MOCKLISTINGS.length} listings</p>
        <p className="text-xs text-muted-foreground">Sorted by {}</p>
      </div>
      <div>
        <ScrollArea className="h-full whitespace-nowrap">
          <div className="flex flex-wrap items-center gap-[1rem]">
            {/* REPLACE MOCKLISTINGS */}
            {MOCKLISTINGS.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
