export class Category {
  id: string;
  name: string;
  slug: string;
  parentRef: string;
  childrenRef: Array<string>;
}
