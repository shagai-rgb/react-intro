import React from "react";
import { MenuHeader } from "@/components/MenuHeader";
import { MenuImg } from "@/components/MenuImg";
import { Head } from "@/components/Head";
import { MenuText } from "@/components/MenuText";
import { MenuPrice } from "@/components/MenuPrice";

export const MenuContainer = (props) => {
  return (
    <div className="container">
      <MenuHeader />
      <MenuImg url={props.url} />
      <Head name={props.name} />
      <MenuText text={props.text} />
      <MenuPrice price={props.price} />
    </div>
  );
};
