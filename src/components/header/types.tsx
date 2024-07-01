export interface MenuOption {
  label: string;
  to: string;
  subOptions?: MenuOption[];
  footer?: boolean;
}

export interface MenuOptions {
  options: MenuOption[];
  footer?: boolean;
}
