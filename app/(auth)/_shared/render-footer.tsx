import Link from 'next/link';

export function RenderFooter({
  href = '',
  link = '',
  text = '',
}: {
  href: string;
  link: string;
  text: string;
}) {
  return (
    <p className='mt-5 text-center text-gray-500'>
      {text}{' '}
      <Link className='text-blue-700' href={href}>
        {link}
      </Link>
    </p>
  );
}
