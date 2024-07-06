import { MenuOptions } from "./types";
import { MenuItem } from "./menu-item";
import TemporaryDrawer from "./mobile-drawer";

export const Menu = ({ options, footer }: MenuOptions) => {
  const footerClases = ["block"];
  const menuClasses = ["flex", "flex-wrap", "max-[600px]:hidden"];
  return (
    <nav>
      <ul className={`mx-4 ${footer ? footerClases : menuClasses.join(" ")}`}>
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
      <TemporaryDrawer options={options} />
    </nav>
  );
};
