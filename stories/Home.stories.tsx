import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "../pages";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Home>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Home> = (args) => (
  <Home {...args} />
);

// export const EditText = Template.bind({});
// EditText.args = {
//   label: {
//     text: "lorem",
//   },
// };
// export const Choose = Template.bind({});
// Choose.args = {
//   label: {
//     text: "lorem",
//   },
// };
