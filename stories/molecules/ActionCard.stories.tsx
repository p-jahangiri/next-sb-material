import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ActionCard from "../../components/molecules/ActionCard";


export default {
  title: "Molecules/ActionCard",
  component: ActionCard,
  argTypes: {
    backgroundColor: { control: "color" },
    height: { control: "number" },
    width: { control: "number" },
     onClick: { action: 'clicked' } 
  },
} as ComponentMeta<typeof ActionCard>;

export const Template: ComponentStory<typeof ActionCard> = (args) => (
  <ActionCard {...args} />
);
