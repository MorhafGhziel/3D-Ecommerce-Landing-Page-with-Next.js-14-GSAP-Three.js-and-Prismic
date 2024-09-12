import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Default`.
 */
export type DefaultProps = SliceComponentProps<Content.DefaultSlice>;

/**
 * Component for "Default" Slices.
 */
const Default = ({ slice }: DefaultProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for default (variation: {slice.variation}) Slices
    </section>
  );
};

export default Default;
