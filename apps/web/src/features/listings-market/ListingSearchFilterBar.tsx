import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/web/shared/components/ui/input";
import { Field } from "@/web/shared/components/ui/field";
import { Button } from "@/web/shared/components/ui/button";

export default function ListingSearchFilterBar() {
  return (
    <div className="w-full">
      <Field orientation="horizontal">
        <div className="relative w-full">
          <Search className="max-h-3 absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search area, price, unit type..." 
            className="pl-9 h-[2.8125rem] text-[0.71463rem] rounded-[1.1875rem]"
          />
          {/* CUSTOMIZE X BUTTON */}
        </div>
        <Button
          variant="secondary"
          className="h-[2.8125rem] w-[2.8125rem] rounded-[1.1875rem]"
        >
          <SlidersHorizontal className="h-[2rem]"/>
        </Button>
      </Field>
    </div>
  );
}
