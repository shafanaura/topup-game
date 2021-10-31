import { ReactNode } from 'react';

interface ListItemProps {
  title: string;
  children: ReactNode;
}

const ListItem = (props: ListItemProps) => {
  const { title, children } = props;
  return (
    <>
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">{children}</ul>
    </>
  );
};

export default ListItem;
