export interface DescriptionListProps {
  list: DescriptionListItem[];
  titleClass?: string;
  descriptionClass?: string;
}

export interface DescriptionListItem {
  label: string;
  description: string;
}
