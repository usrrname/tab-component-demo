import { buttonVariants } from "../src/components/index";

export type TabDataProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
  isActive?: boolean;
};

export type TabProps = Pick<TabDataProps, "id" | "isActive"> & {
  activeTab?: number | undefined;
  variant?: keyof typeof buttonVariants;
  children: TabChildren;
  onClick: (id: number) => void;
  className?: string;
};

export type TabChildren =
  | React.ReactNode
  | React.ReactNode[]
  | JSX.Element
  | string;

export type TabContainerProps = {
  children?: TabChildren;
  tabs: TabDataProps[];
};

export type TabContentAreaProps = {
  children?: TabChildren;
};
