import type { Meta } from "@storybook/react";

import IconButton from ".";

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

export function Primary() {
  return (
    <div
      style={{ backgroundColor: "var(--background-color)", padding: "15px" }}
    >
      <IconButton icon="favorite" variant="primary" />
      <IconButton icon="arrow-left" variant="primary" />
      <IconButton icon="arrow-right" variant="primary" />
      <IconButton icon="remove" variant="primary" />
    </div>
  );
}
