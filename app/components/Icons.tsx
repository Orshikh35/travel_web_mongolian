import React from "react";

type IconProps = { className?: string };

const base = (className = "h-5 w-5") => ({
  className,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
});

export const GlobeIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </svg>
);

export const ChevronDownIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronLeftIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="m15 6-6 6 6 6" />
  </svg>
);

export const ChevronRightIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const ArrowRightIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeftIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export const XIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export const PinIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const ClockIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const CalendarIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export const CompassIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2z" />
  </svg>
);

export const StarIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5z" />
  </svg>
);

export const PlusIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M5 12h14" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const ShieldIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 3l7 4v5c0 5-3.6 8.8-7 10-3.4-1.2-7-5-7-10V7l7-4z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ChatIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4 5h16v11H8l-4 4V5z" />
    <path d="M8 9h8M8 12h5" />
  </svg>
);

export const ExpandIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
  </svg>
);

// --- Trip icons, matching the pictograms on the printed program cards ---

export const PlaneIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M10.5 13.5 4 11l1.5-1.5 7 1 3.8-3.8a2 2 0 0 1 2.9 2.9L15.4 13.4l1 7L15 22l-2.5-6.5-3 3V21l-1.5 1-1-3-3-1 1-1.5h2.5l3-3z" />
  </svg>
);

export const GuideIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <circle cx="17" cy="9.5" r="2.3" />
    <path d="M15.8 14.6A4.5 4.5 0 0 1 21 19" />
  </svg>
);

export const CarIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4 16v-4l2-5h12l2 5v4" />
    <path d="M3 16h18v2.5H3z" />
    <path d="M4 12h16" />
    <circle cx="7.5" cy="14" r=".6" fill="currentColor" />
    <circle cx="16.5" cy="14" r=".6" fill="currentColor" />
    <path d="M6 18.5V20M18 18.5V20" />
  </svg>
);

export const MountainIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M2.5 19.5 9 8l4 7 2.5-4 6 8.5z" />
    <path d="m7.4 10.8 1.6 1.4 1.6-1.4" />
  </svg>
);

export const GerIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M3 12.5C5 8.2 8.2 6 12 6s7 2.2 9 6.5" />
    <path d="M4.5 12.5v7h15v-7M3 12.5h18" />
    <path d="M10.5 19.5v-4h3v4" />
    <path d="M6.5 15.5l2 2M8.5 15.5l-2 2M15.5 15.5l2 2M17.5 15.5l-2 2" />
    <path d="M10.8 6.2 12 4l1.2 2.2" />
  </svg>
);

export const DinnerIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M7 3v7M5 3v4a2 2 0 0 0 4 0V3M7 10v11" />
    <path d="M17 21V3c-2 1.5-3 4-3 7v3h3" />
  </svg>
);

export const BreakfastIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
    <path d="M16 10.5h1.5a2.5 2.5 0 0 1 0 5H16" />
    <path d="M8 3c-.8 1 .8 2 0 3M12 3c-.8 1 .8 2 0 3" />
    <path d="M3 21h14" />
  </svg>
);

export const HikeIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="13" cy="4.5" r="1.8" />
    <path d="m9 21 2.5-6.5 3 3V21M11.5 14.5 12 9l-3 2v3M12 9l3 3 2.5.5" />
    <path d="M18.5 9.5V21" />
  </svg>
);

export const CameraIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.8l1.5-2.5h6.4L16.7 7h2.8A1.5 1.5 0 0 1 21 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z" />
    <circle cx="12" cy="13" r="3.8" />
  </svg>
);

export const ReturnIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M9 14 4 9l5-5" />
    <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
  </svg>
);

export const LakeIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="m3 12 5-7 3.5 5 2-2.5L19 12" />
    <path d="M2.5 16c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0" />
    <path d="M2.5 20c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0" />
  </svg>
);

export const WaterfallIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M3 5h7v3M14 5h7" />
    <path d="M10 8v9M13 5v12M16.5 5v9" />
    <path d="M3 20c1.5-1.3 3-1.3 4.5 0s3 1.3 4.5 0 3-1.3 4.5 0 3 1.3 4.5 0" />
  </svg>
);

export const HomeIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="m3 11 9-7 9 7" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M10 20v-5.5h4V20" />
  </svg>
);

export const BookIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5z" />
    <path d="M12 6.5v13" />
  </svg>
);

// Stylised eagle with spread wings, used for the brand mark and eagle-related activities.
export const EagleIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 9.5c-1.6-2.6-4.6-4-9-4 1 1.6 2.3 2.6 4 3-1.2.2-2.1.7-2.8 1.6 1.7.6 3.3.6 4.8 0-.7.9-1 1.9-.8 3 1.2-.3 2.4-1 3.3-2" />
    <path d="M12 9.5c1.6-2.6 4.6-4 9-4-1 1.6-2.3 2.6-4 3 1.2.2 2.1.7 2.8 1.6-1.7.6-3.3.6-4.8 0 .7.9 1 1.9.8 3-1.2-.3-2.4-1-3.3-2" />
    <path d="M10.6 11.3 12 19l1.4-7.7" />
    <path d="M10.5 7.4c0-.9.7-1.6 1.5-1.6s1.5.7 1.5 1.6" />
  </svg>
);

export const CeremonyIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4 21V9M20 21V9M2.5 9h19" />
    <path d="M4 9c2-3 5-5 8-6 3 1 6 3 8 6" />
    <path d="M9 21v-6.5a3 3 0 0 1 6 0V21" />
  </svg>
);

export const HorseIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M6 20v-5.5c0-2.5 1.6-4.3 4-4.8l3-.7 2.2-3.5 1.3 1.2.8-1.7 1.2 2.3c.9.9 1.5 2 1.5 3.2l-1.6.9-1.9-1.4L15 12v8" />
    <path d="M10 20v-4.5M6 14.5c-1.3.2-2.4 1-3 2.2" />
  </svg>
);

export const MusicIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M9 18V6l10-2v12" />
    <circle cx="6.5" cy="18" r="2.5" />
    <circle cx="16.5" cy="16" r="2.5" />
  </svg>
);

export const CraftIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M12 7.5 16.5 12 12 16.5 7.5 12z" />
    <path d="M12 10.5 13.5 12 12 13.5 10.5 12z" />
  </svg>
);

export const TrophyIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
    <path d="M7 6H4.5a2.5 2.5 0 0 0 2.6 4M17 6h2.5a2.5 2.5 0 0 1-2.6 4" />
    <path d="M12 14v3.5M8.5 20.5h7M9.5 20.5c0-1.7 1.1-3 2.5-3s2.5 1.3 2.5 3" />
  </svg>
);

export const FlagIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M5 21V4" />
    <path d="M5 4.5c3-1.5 5.5 1.5 8.5 0s4-1 5.5-.5v8.5c-1.5-.5-2.5-1-5.5.5s-5.5-1.5-8.5 0" />
  </svg>
);

export const HotelIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V21" />
    <path d="M16 10h2.5A1.5 1.5 0 0 1 20 11.5V21M2.5 21h19" />
    <path d="M8 8h1.5M10.5 8H12M8 11.5h1.5M10.5 11.5H12M8 15h1.5M10.5 15H12" />
  </svg>
);
