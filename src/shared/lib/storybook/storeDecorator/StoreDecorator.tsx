import { Decorator } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/storeProvider";
import { DeepPartial } from "@/shared/types";

export const StoreDecorator =
  (state: DeepPartial<StateSchema>): Decorator =>
  (Story) => (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
  );
