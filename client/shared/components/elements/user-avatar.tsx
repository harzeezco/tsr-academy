import Image from 'next/image';

export function UserAvatar({ className }: { className: string }) {
  return (
    <div className={className}>
      <Image
        alt='user avatar'
        className='d-block aspect-[1] w-10 rounded-full object-cover object-center'
        height={45}
        src='/images/user-avatar.jpg'
        width={45}
      />
    </div>
  );
}
