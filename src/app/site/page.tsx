// import { Button } from '@components/ui/Button';
import clsx from 'clsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { pricingCards } from '@/lib/constants';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <section className='h-full w-full pt-36 relative flex items-center justify-center flex-col'>
        {/* grid */}

        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <p className='text-center'>Run your agency, in one place.</p>

        <div className='bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative'>
          <h1 className='text-9xl font-bold text-center md:text-[300px]'>
            Plura
          </h1>
        </div>

        <div className='flex justify-center items-center relative md:mt-[-70px]'>
          <Image 
            src={'/assets/preview.png'}
            alt="banner image"
            height={1200}
            width={1200}
            className='rounded-tl-2xl rounded-tr-2xl border-2 border-muted'
          />
          <div className='bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10'></div>
        </div>
      </section>

      <section className='flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-40px]'>
        <h2 className='text-4xl text-center'>Choose what fits your right</h2>

        <p className='text-muted-foreground text-center'>
          Our straightfoward pricing plans are tailored to meet your needs. If {" you're"} not <br />
          ready to commit you can get started for free.
        </p>

        <div className='flex justify-center gap-4 flex-wrap mt-6'>
          {pricingCards.map((card) => (
            // WIP: wire up free product from stripe

            <Card key={card.title}
              className={clsx('w-[300px] flex flex-col justify-between', {
                'border-2 border-primary': card.title === 'Unlimited Saas'
              })}
            >

              <CardHeader>
                <CardTitle className={clsx('', {
                    'text-muted-foreground': card.title !== 'Unlimited Saas'
                })}>
                  { card.title }
                </CardTitle>

                <CardDescription>{ card.description }</CardDescription>
              </CardHeader>

              <CardContent>
                <span className='text-4xl font-bold'>{ card.price }</span>
                <span className=''>/m</span>
              </CardContent>

              <CardFooter className='flex flex-col items-start gap-4'>
                <div>
                  {card.features.map((feature) => (
                    <div key={ feature } className='flex gap-2 items-center'>
                      <Check className='text-muted-foreground' />
                      <p>{ feature }</p>
                    </div>
                  ))}
                </div>
                <Link href={`/agency?plan=${card.priceId}`}
                  className={clsx('w-full text-center bg-primary p-2 rounded-md',
                    { '!bg-muted-foreground': card.title !== 'Unlimited Saas' })}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
