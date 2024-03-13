import { Container } from '@landing-page/shared';
import { FAQAccordion } from '@landing-page/shared/components/accordion';

export function FAQ() {
  return (
    <Container
      as='section'
      className='bg-[#EDF0F7] py-14'
      variant='outer'
    >
      <Container>
        <h1 className='h1-bold70 text-center text-dark-900'>
          Frequently{' '}
          <span className='text-blue-700'>Asked Questions</span>
        </h1>
        <div className='mt-8' id='faq'>
          <FAQAccordion />

          <div className='mx-auto mt-5 max-w-4xl rounded-[20px] bg-blue-200 py-3 text-center'>
            <h3 className='mb-2 text-2xl text-dark-900'>
              Still have questions?
            </h3>

            <p className=''>
              Can’t find the answer you’re looking for? Please chat to
              our friendly team{' '}
              <button className='text-blue-700' type='button'>
                help@tsrlearning.com
              </button>
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
}
