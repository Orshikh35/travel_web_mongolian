import React from "react";
import type { ActivityIcon, StayIcon } from "../data/tour";
import {
  BookIcon,
  BreakfastIcon,
  CameraIcon,
  CarIcon,
  CeremonyIcon,
  CraftIcon,
  DinnerIcon,
  EagleIcon,
  FlagIcon,
  GerIcon,
  GuideIcon,
  HikeIcon,
  HomeIcon,
  HorseIcon,
  HotelIcon,
  LakeIcon,
  MountainIcon,
  MusicIcon,
  PinIcon,
  PlaneIcon,
  ReturnIcon,
  TrophyIcon,
  WaterfallIcon,
} from "./Icons";

type IconComponent = (props: { className?: string }) => React.ReactElement;

const ACTIVITY_ICONS: Record<ActivityIcon, IconComponent> = {
  plane: PlaneIcon,
  pin: PinIcon,
  guide: GuideIcon,
  car: CarIcon,
  mountain: MountainIcon,
  ger: GerIcon,
  dinner: DinnerIcon,
  breakfast: BreakfastIcon,
  hike: HikeIcon,
  camera: CameraIcon,
  return: ReturnIcon,
  lake: LakeIcon,
  waterfall: WaterfallIcon,
  home: HomeIcon,
  book: BookIcon,
  eagle: EagleIcon,
  ceremony: CeremonyIcon,
  horse: HorseIcon,
  music: MusicIcon,
  craft: CraftIcon,
  trophy: TrophyIcon,
  flag: FlagIcon,
};

const STAY_ICONS: Record<StayIcon, IconComponent> = {
  ger: GerIcon,
  home: HomeIcon,
  hotel: HotelIcon,
  plane: PlaneIcon,
};

export const TripIcon = ({ name, className }: { name: ActivityIcon | undefined; className?: string }) => {
  const Icon = ACTIVITY_ICONS[name ?? "pin"];
  return <Icon className={className} />;
};

export const StayIconView = ({ name, className }: { name: StayIcon | undefined; className?: string }) => {
  const Icon = STAY_ICONS[name ?? "ger"];
  return <Icon className={className} />;
};
