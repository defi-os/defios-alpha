import React from 'react';
import Image from '@/components/ui/image';

import Solana from '@/assets/images/trusted1.png';
import SuperteamEarn from '@/assets/images/trusted2.png';
import Superteam from '@/assets/images/trusted3.png';
import Pyth from '@/assets/images/trusted4.png';

interface TrustedPartnersProps {}

export const TrustedPartners: React.FC<TrustedPartnersProps> = ({}) => {
  return (
    <div className="z-[20] flex w-screen flex-col items-center justify-center bg-[#060606]">
      <div className="mt-10 text-sm uppercase text-indigo-300 xl:text-base 3xl:text-lg">
        Trusted by the best open source software teams
      </div>
      <div className="mb-14 mt-20 flex h-7 items-center justify-center gap-10 grayscale">
        <Image
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 'auto', height: '100%' }} // optional
          src={Solana}
        />
        <Image
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 'auto', height: '100%' }} // optional
          src={SuperteamEarn}
        />
        <Image
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 'auto', height: '100%' }} // optional
          src={Superteam}
        />
        <Image
          alt="image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 'auto', height: '100%' }} // optional
          src={Pyth}
        />
      </div>
    </div>
  );
};

export default TrustedPartners;
