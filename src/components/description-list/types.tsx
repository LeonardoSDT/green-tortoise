export interface DescriptionListProps {
  list?: DescriptionListItem[];
  titleClass?: string;
  descriptionClass?: string;
  className?: string;
}

export interface DescriptionListItem {
  title: string;
  description: string;
}
