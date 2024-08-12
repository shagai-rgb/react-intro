import React from "react";
import { MenuHeader } from "@/components/MenuHeader";
import { MenuImg } from "@/components/MenuImg";
import { Head } from "@/components/Head";
import { MenuText } from "@/components/MenuText";
import { MenuPrice } from "@/components/MenuPrice";

const menus = [
  {
    name: "vegan burger",
    text: `  A burger is a delicious creation that starts with a juicy beef patty,
      cooked to perfection. It's layered with melted cheese, fresh lettuce, ripe
      tomatoes, and tangy pickles. Add a slice of onion, a dollop of ketchup,
      and a smear of mustard, all nestled between a soft, toasted bun. Every
      bite is a burst of flavor!`,
    price: "19.90",
  },
  {
    name: "cheese burger",
    text: `  A burger is a delicious creation that starts with a juicy beef patty,
      cooked to perfection. It's layered with melted cheese, fresh lettuce, ripe
      tomatoes, and tangy pickles. Add a slice of onion, a dollop of ketchup,
      and a smear of mustard, all nestled between a soft, toasted bun. Every
      bite is a burst of flavor!`,
  },
];
export const MenuContainer = () => {
  return (
    <div className="container">
      <MenuHeader />
      <MenuImg />
      <Head />
      <MenuText />
      <MenuPrice />
    </div>
  );
};
