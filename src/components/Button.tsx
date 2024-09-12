import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { LinkField } from "@prismicio/client";

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
};

const Button = (props: Props) => {
  return <PrismicNextLink field={slice.primary.button_link}></PrismicNextLink>;
};
