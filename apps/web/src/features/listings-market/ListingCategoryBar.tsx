import { cn } from "@/web/shared/lib/utils";
import { useState } from "react";
import { Button } from "@/web/shared/components/ui/button";
import { ScrollArea } from "@/web/shared/components/ui/scroll-area"

const CATEGORIES = ["Studio", "Loft Type", "1 Bedroom", "2 Bedroom"];

export default function ListingsCategoryBar() {
  const categories = ["All", "Verified", ...CATEGORIES];
  const [active, setActive] = useState<string>("All")

  // ADD STRING FORMATTING AND MAKE CATEGORIES SMALL CHARACTERS
  return (
    <div>
      <ScrollArea className="w-full whitespace-nowrap rounded-[1.1875rem]">
        <div className="flex gap-x-[0.8rem] overflow-y-visible overflow-x-visible">
          {categories.map((type) => (
            <Button 
              key={type}
              variant="ghost"
              className={cn(
                "h-[2.1875rem] px-[1rem] rounded-[1.1875rem] transition-colors",
                active === type ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}
              onClick={() => setActive(type)}  
            >
              <p className="text-xs">
                {type}
              </p>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
