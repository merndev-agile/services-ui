export type MenuItemProps = {
  menuLink: string;
  menuIcon: string;
  menuIconWidth: number;
  menuIconHeight: number;
};

export type MenuList = {
  name: string;
  link: string;
};

export type AccordionItem = {
  Question: string;
  Answer: string;
};

export type AccordionProps = {
  items: AccordionItem[];
};
