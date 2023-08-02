import React from 'react';

interface ButtonProps {
  /**
   * What color predefined set of color and styles should this button use?
   */
  palette: "primary"| "secondary"|"primary-hollow"|"secondary-hollow"|"grey-light"|"secondary-dark";

  /**
   * How large should the button be?
   */
  size?: 'small' | 'large' | 'default';

  /**
   * Button text
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const getPalette = (palette: string) : string => {
  switch (palette) {
    case "secondary":
      return "sb-button-palette-secondary"
    case "primary":
      return "sb-button-palette-primary"
    case "grey-light":
      return "sb-button-palette-grey-light"
    case "secondary-dark":
      return "sb-button-palette-secondary-dark"
    case "primary-hollow":
      return "sb-button-palette-primary-hollow"
    case "secondary-hollow":
      return "sb-button-palette-secondary-hollow"
  }
  return 'sb-button-palette-secondary'
}
const getButtonSize = (size:string) : string => {
  switch (size) {
    case "small":
      return "sb-button_px-sm-x sb-button_py-sm-y"
    case "large":
      return "sb-button_px-lg-x sb-button_py-lg-y"
    default:
      return "sb-button_px-sm-x sb-button_py-sm-y lg:sb-button_px-lg-x lg:sb-button_py-lg-y"
  }
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  palette = "primary",
  size = "small",
  label,
  ...props
}: ButtonProps) => {

  return (
    <button
      type="button"
      className={[`${getPalette(palette)}`, `${getButtonSize(size)}`, 'rounded-interface-interactive-element','sb-button_bg-paper', 'hover:sb-button_bg-paper-hover', 'sb-button_ring-accent', 'hover:sb-button_ring-accent-hover', 'sb-button_text-ink', 'hover:sb-button_text-ink-hover', 'ring-4', 'ring-inset', 'transition'].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
