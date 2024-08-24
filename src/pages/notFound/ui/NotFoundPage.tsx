import { Container } from "@/shared/ui";
import { FC, memo } from "react";

const NotFoundPage: FC = memo(() => {
  return (
    <div>
      <Container>Страница не найдена</Container>
    </div>
  );
});

export default NotFoundPage;
