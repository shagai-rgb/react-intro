import { MenuContainer } from "@/components/MenuContainer";

const menus = [
  {
    name: "vegan burger",
    text: `  A burger is a delicious creation that starts with a juicy beef patty,
      cooked to perfection. It's layered with melted cheese, fresh lettuce, ripe
      tomatoes.`,
    price: "9.90",
    url: "/burgerimg.png",
  },

  {
    name: "cheese burger",
    text: `A cheeseburger is a beef patty with melted cheese, lettuce, tomato, and condiments, all inside a toasted bun fresh lettuce, ripe
      tomatoes..`,
    price: "20.90",
    url: "/cheeseburger.png",
  },
  {
    name: "beef burger",
    text: `A beef burger is a grilled patty topped with lettuce, tomato, and onions, served on a toasted bun with condiments like ketchup and mustard.`,
    price: "25.90",
    url: "/beefburger.png",
  },
  {
    name: "chicken burger",
    text: `A chicken burger features a grilled chicken patty, often with lettuce, tomato, and mayo, in a bun fresh lettuce, ripe
      tomatoes..`,
    price: "21.90",
    url: "/chickenburgerpng.webp",
  },
  {
    name: "hamburger",
    text: `A hamburger consists of a seasoned beef patty, often topped with lettuce, tomato, onions, and condiments, all inside a bun.`,
    price: "19.90",
    url: "/hamburger.webp",
  },
];

const Home = () => {
  return (
    <div className="mainContainer">
      {menus.map((el) => {
        return (
          <MenuContainer
            name={el.name}
            price={el.price}
            text={el.text}
            url={el.url}
          />
        );
      })}
    </div>
  );
};

export default Home;
