import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "../../pages";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    marginRight: { control: "number" },
    onClick: { action: 'clicked' } 
  },
} as ComponentMeta<typeof Home>;

export const Template: ComponentStory<typeof Home> = (args) => (
  <Home {...args} />
);

