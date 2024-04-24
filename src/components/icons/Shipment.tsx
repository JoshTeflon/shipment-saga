import { FC, SVGProps } from 'react';

const Shipment: FC<SVGProps<SVGSVGElement>> = ({...props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        d="M236.4 70.65L130.2 40.31a8 8 0 00-3.33-.23L21.74 55.1A16.08 16.08 0 008 70.94v114.12a16.08 16.08 0 0013.74 15.84l105.13 15a8.47 8.47 0 001.13.1 7.85 7.85 0 002.2-.31l106.2-30.34A16.07 16.07 0 00248 170V86a16.07 16.07 0 00-11.6-15.35zM96 120H80V62.94l40-5.72v141.56l-40-5.72V136h16a8 8 0 000-16zM24 70.94l40-5.72V120H48a8 8 0 000 16h16v54.78l-40-5.72zm112 126.45V58.61L232 86v84z"
        fill='currentColor'
      />
    </svg>
  );
};

export default Shipment;