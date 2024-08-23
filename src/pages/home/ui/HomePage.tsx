import { FC, memo } from "react";
import { Device } from "@/entities/device";
import { Container } from "@/shared/ui";

const data = [
  {
    id: 1,
    name: "Apple iPhone 15",
    price: 83999,
    imageUrl:
      "https://c.dns-shop.ru/thumb/st1/fit/0/0/b01f455e0db36429001e817cc9a08484/2258685cc32bbd96de406852bd9b2d94916029658cd6fa120a9f97a4bc0af297.jpg.webp",
  },
];

const HomePage: FC = memo(() => {
  return (
    <div>
      <Container>
        <Device
          name={data[0].name}
          price={data[0].price}
          id={data[0].id}
          imageUrl={data[0].imageUrl}
        />
      </Container>
    </div>
  );
});

export default HomePage;
