export type IconProps = {
  size?: number;
  className?: string;
  color?: string;
  onClick?: () => void;
  strokeWidth?: number;
};

export function mapSvgProps(props: IconProps) {
  return {
    className: props.className,
    color: props.color,
    height: props.size ?? "1em",
    width: props.size ?? "1em",
    onClick: props.onClick,
    strokeWidth: props.strokeWidth ?? 0,
  };
}
