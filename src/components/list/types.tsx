export interface ItemList {
  title?: string;
  description?: string;
  link?: string;
  linkLabel?: string;
}

export interface ListProps {
  list: ItemList[];
  className?: string;
  showIcon?: boolean;
  listItemClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  linkClass?: string;
}
