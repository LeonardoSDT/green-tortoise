import { MenuOptions } from "./types";
import { MenuItem } from "./menu-item";

export const Menu = ({ options, footer }: MenuOptions) => {
  return (
    <nav className="mx-4">
      <ul className={`menu ${footer ? "block" : "flex"}`}>
        {options.map(({ label, to, subOptions }, key) => (
          <MenuItem
            key={key}
            label={label}
            to={to}
            subOptions={subOptions}
            footer={footer}
          />
        ))}
      </ul>
    </nav>
  );
};
