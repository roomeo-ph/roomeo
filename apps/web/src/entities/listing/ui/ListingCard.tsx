import { type MockListing } from '../model/types';
import { MapPin, Heart, Check } from 'lucide-react';

interface ListingCardProps {
  listing: MockListing
  actionSlot?: React.ReactNode // Slot for features like bookmark or share
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="min-h-[14.3rem] w-[10.3rem] min-w-0 max-w-full flex flex-col rounded-[1.1875rem] shadow-[0px_0px_10px_rgba(0,0,0,0.15)]">
      <div 
        className='flex flex-col justify-between h-[8.8rem] w-full shrink-0 bg-cover bg-center rounded-t-[1.1875rem]'
        style={{ backgroundImage: `url(${listing.imageLink})` }}
      >
        <div className='flex flex-col items-end p-4'>
          <div className='flex justify-center items-center size-8 rounded-full bg-muted'>
            <Heart className='size-6  ' />
          </div>
        </div>
        <div className='flex flex-col items-start p-4'>
          <div className='h-6 w-16 flex flex-row justify-center items-center gap-0.5 rounded-xl bg-primary'>
            <Check className='text-primary-foreground size-3' />
            <p className='text-primary-foreground text-[0.56rem] font-bold'>Verified</p>
          </div>
        </div>
      </div>

      <div className='flex min-w-0 flex-col justify-start p-3 gap-1'>
        <h1 className="truncate text-xs font-semibold tracking-tight" title={listing.name}>
          {listing.name}
        </h1>
        <h2 className='text-xs text-primary font-semibold whitespace-normal [overflow-wrap:anywhere]'>
          ₱{listing.monthlyPrice.toLocaleString("en-us")} /mo
        </h2>
        <div className='flex min-w-0 flex-row items-start text-muted-foreground gap-1'>
          <MapPin className='mt-0.5 size-3 shrink-0' aria-hidden="true"/>
          <h3 className='min-w-0 text-xs font-semibold whitespace-normal [overflow-wrap:anywhere]'>
            {listing.distance} km | {listing.walkDuration} min walk
          </h3>
        </div>
      </div>
    </div>
  );
}
