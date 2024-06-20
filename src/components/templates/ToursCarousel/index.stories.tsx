import type { Meta, StoryObj } from "@storybook/react";

import { ToursCarousel } from "./index";

const meta = {
  component: ToursCarousel,
} satisfies Meta<typeof ToursCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slides: [
      {
        id: "1",
        image: "http://localhost:8080/assets/banner.jpg",
        title: "Title",
        description: "desc",
      },
      {
        id: "2",
        image: "http://localhost:8080/assets/banner.jpg",
        title: "Title2",
        description: "desc2",
      },
      {
        id: "3",
        image: "http://localhost:8080/assets/banner.jpg",
        title: "Title3",
        description: "desc3",
      },
      {
        id: "4",
        image: "http://localhost:8080/assets/banner.jpg",
        title: "Title4",
        description: "desc4",
      },
      {
        id: "5",
        image: "http://localhost:8080/assets/banner.jpg",
        title: "Title5",
        description: "desc5",
      },
    ],
  },
};
