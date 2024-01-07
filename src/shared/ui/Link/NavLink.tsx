import Link from 'next/link';

type NavLinkProps = {
  to: string;
  children: string;
};

export default function NavLink({ to, children }: NavLinkProps): React.ReactNode {
  return (
    <Link
      href={to}
      className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-primary mr-4"
    >
      {children}
    </Link>
  );
}
