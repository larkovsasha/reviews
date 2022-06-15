import { TopLevelCategory } from './page.interface';

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  isOpened?: boolean;
  pages: PageItem[];
}
export interface FirstLevelMenuItem {
  route: string;
  icon: JSX.Element;
  name: string;
  _id: TopLevelCategory;
}
