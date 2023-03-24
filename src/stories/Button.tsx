import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  palette: "primary"| "secondary"|"primary-hollow"|"secondary-hollow"|"grey-light";
  
  /**
   * How large should the button be?
   */
  size?: 'small' | 'large';

  /**
   * Button contents
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
      return "sb-button"
    case "large":
      return "sb-button-lg"
    default:
      return "button"
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
      className={[`${getPalette(palette)}`, 'sb-button_bg-paper', 'hover:sb-button_bg-paper-hover', 'sb-button_ring-accent', 'hover:sb-button_ring-accent-hover', 'sb-button_text-ink', 'hover:sb-button_text-ink-hover', 'ring-4', 'ring-inset', `${getButtonSize(size)}`, 'transition'].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
