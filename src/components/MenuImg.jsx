import Image from "next/legacy/image";

export const MenuImg = (props) => {
  return <Image src={props.url} width={250} height={250} alt="Burger" />;
};
