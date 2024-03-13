import Image from 'next/image';

export function RightSidebar() {
  return (
    <div>
      <Image
        alt='chart'
        height={340}
        src='/images/right-chart.png'
        width={340}
      />
    </div>
  );
}
