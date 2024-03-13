import { HeadContent } from '../head-content';

function RenderHeader({
  desc = '',
  heading = 'Forgot Password',
  instructions,
}: {
  desc?: string;
  heading?: string;
  instructions?: string;
}) {
  return (
    <>
      <div className='flex flex-col items-center'>
        <HeadContent description={desc} heading={heading} />
      </div>

      <div className='mb-3 mt-2 rounded-[10px] bg-blue-100 p-3'>
        <p className='text-blue-700'>{instructions}</p>
      </div>
    </>
  );
}

export default RenderHeader;
