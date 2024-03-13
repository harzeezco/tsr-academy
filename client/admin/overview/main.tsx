import Image from 'next/image';

type ChartCardProp = {
  chartIcon: string;
  desc: string;
  price: string;
  renderFooter: () => React.ReactNode;
};

function ChartCard({
  chartIcon,
  desc,
  price,
  renderFooter,
}: ChartCardProp) {
  return (
    <div className='grid max-w-[346px] place-items-center rounded-[14px] bg-gray-100 p-4'>
      <div className='flex gap-8 border-b border-solid border-[#E8E8E8] pb-5'>
        <div className=''>
          <p className='text-2xl font-semibold text-dark-400'>
            {price}
          </p>
          <span
            className='line-clamp-1 text-[15px] font-medium'
            title={desc}
          >
            {desc}
          </span>
        </div>

        <Image
          alt='bar chart'
          height={70}
          src={`/icons/${chartIcon}`}
          width={116}
        />
      </div>

      {renderFooter()}
    </div>
  );
}

export function Main() {
  return (
    <div>
      <div className='flex items-center gap-5'>
        <ChartCard
          chartIcon='chart.svg'
          desc='Total Sales this week'
          price='$86,725'
          renderFooter={() => (
            <p className='flex items-center gap-1 pt-2'>
              <Image
                alt='arrow up'
                height={20}
                src='/icons/arrow-up.svg'
                width={20}
              />
              <span>
                <span className='text-green-300'>28% Increased</span>{' '}
                than last week
              </span>
            </p>
          )}
        />

        <ChartCard
          chartIcon='enrolment-chart.svg'
          desc='Total Enrolment this week'
          price='263'
          renderFooter={() => (
            <p className='flex items-center gap-1 pt-2'>
              <Image
                alt='arrow up'
                height={20}
                src='/icons/arrow-down.svg'
                width={20}
              />
              <span>
                <span className='text-red-100'>28% Increased</span>{' '}
                than last week
              </span>
            </p>
          )}
        />
      </div>

      <div>
        <Image
          alt='chart'
          className='w-full'
          height={340}
          src='/images/daily-chart.png'
          width={768}
        />
      </div>
    </div>
  );
}
