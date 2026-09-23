import { Tabs, TabsList, TabsTrigger } from "@/web/shared/components/ui/tabs";
import { Search, Bookmark} from "lucide-react";

export default function ListingBrowseSavedToggle() {
  return (
      <div>
        <Tabs defaultValue="browse">
          <TabsList className="min-h-[3.125rem] w-full rounded-full bg-muted/60 p-1">
            <TabsTrigger
              value="browse"
              className="h-[2.625rem] flex items-center rounded-full transition-all data-[state=active]:bg-background">
              <Search className="size-3" />
              <p className="text-xs"> Browse </p>
            </TabsTrigger>
            <TabsTrigger
              value="saved"
              className="h-[2.625rem] flex items-center rounded-full text-muted-foreground transition-all data-[state=active]:bg-background data-[state=active]:text-foreground">
              <Bookmark className="size-3" />
              <p className="text-xs"> Search </p>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
  );
}
