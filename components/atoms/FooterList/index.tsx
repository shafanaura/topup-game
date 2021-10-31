import Link from 'next/link';

interface FooterListProps {
  title: string;
}

const FooterList = (props: FooterListProps) => {
  const { title } = props;

  return (
    <li className="mb-6">
      <Link href="/">
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
};

export default FooterList;
