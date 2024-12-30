import React from "react";
import {
  TrainFront,
  Bus,
  Rocket,
  Hotel,
  TreePalm,
  Soup,
  LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DatePicker } from "./DatePicker";
import { Selector } from "./Selector";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NavigationIconProps {
  icon: LucideIcon;
  label: string;
}

const NavigationIcon: React.FC<NavigationIconProps> = ({
  icon: Icon,
  label,
}) => (
  <div className="pb-3 flex flex-col items-center space-y-2">
    <Icon className="w-6 h-6" />
    <div>{label}</div>
  </div>
);

const navigationIcons: NavigationIconProps[] = [
  { icon: TrainFront, label: "Train" },
  { icon: Rocket, label: "Flight" },
  { icon: Bus, label: "Bus" },
  { icon: Hotel, label: "Hotel" },
  { icon: TreePalm, label: "Holiday" },
  { icon: Soup, label: "Meals" },
];

interface SearchInputProps {
  label: string;
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ label, placeholder }) => (
  <div className="flex flex-col items-start space-y-2 w-full md:w-auto">
    <div>{label}</div>
    <Input placeholder={placeholder} className="w-full md:w-52" />
  </div>
);

const IconsRow: React.FC = () => (
  <div className="flex flex-row justify-around border-b pt-2 pb-3">
    {navigationIcons.map((item, index) => (
      <NavigationIcon key={index} {...item} />
    ))}
  </div>
);

const SearchRow: React.FC = () => (
  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
    <SearchInput label="From" placeholder="Search a place" />
    <SearchInput label="To" placeholder="Search a place" />

    <div className="flex flex-col items-start space-y-2 w-full md:w-auto">
      <div>Journey Date</div>
      <DatePicker />
    </div>

    <div className="flex flex-col items-start space-y-2 w-full md:w-auto">
      <div>Type</div>
      <Selector />
    </div>

    <div className="flex items-center justify-center w-full md:mx-auto mt-4 md:mt-7">
      <Button variant="destructive" className=" px-6 w-full md:w-auto">
        Search
      </Button>
    </div>
  </div>
);

const Navigation: React.FC = () => {
  return (
    <div className="mb-7 px-6 sm:px-10 md:px-20 lg:px-40 mt-10 Abel">
      <Card>
        <CardContent>
          <div className="my-6 mx-2">
            <IconsRow />
            <SearchRow />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Navigation;
