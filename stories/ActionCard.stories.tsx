import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ActionCard from "../components/ActionCard";


export default {
  title: "components/ActionCard",
  component: ActionCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ActionCard>;

export const Template: ComponentStory<typeof ActionCard> = (args) => (
  <ActionCard {...args} />
);
