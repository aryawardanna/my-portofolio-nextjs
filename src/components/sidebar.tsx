/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface Props {}

interface ItemProps {
  href?: string;
  text?: string;
}
const Item = ({
  href = '/',
  text = 'link',
}: {
  href: string;
  text: string;
}) => (
  <Link
    href={href}
    className="px-4 py-2 text-zinc-900 w-[231px] hover:bg-zinc-200 rounded-md"
  >
    {text}
  </Link>
);

const Sidebar = ({}: Props) => {
  return (
    <div className="flex flex-col w-[231px] gap-[11px]">
      <Image alt="logo" width={54} height={54} src="/img/home.png" />

      <Item href={'/'} text="Home" />
      <Item href={'/blog'} text="Blog" />
      <Item href={'/about'} text="About" />
      <Item href={'/guestbook'} text="Guest Book" />
    </div>
  );
};

export default Sidebar;
