import React from 'react'
import Image from 'next/image';

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl dark:text-white">
      Manage Your Expense
        <strong className="font-extrabold text-indigo-600 sm:block"> Control Your Money </strong>
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-xl/relaxed dark:text-gray-200">
        Start Creating your budget and save ton of money
      </p>

      <div className="-mt-9 flex justify-center gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          href="/sign-in"
        >
          Get Started
        </a>

        
      </div>
    </div>
  </div>
  <img src="https://i.pinimg.com/1200x/b6/40/2b/b6402b5f222164eb5206c51f89afea24.jpg" alt='dashboard'
  width={1000}
  height={700}
  className='-mt-9 rounded-xl border-2'
  />


</section>

  )
}

export default Hero