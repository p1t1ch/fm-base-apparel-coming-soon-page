import React from 'react'
import Seo from '@/components/Seo'
import { ReactComponent as Logo } from '@/icons/logo.svg'
import heroDesktop from '@/images/hero-desktop.jpg'
import heroMobile from '@/images/hero-mobile.jpg'
import SubscriptionForm from '@/components/SubscriptionForm'

function IndexPage() {
  return (
    <div className="lg:grid lg:grid-cols-desktop min-h-screen">
      <Seo title="Frontend Mentor: Base Apparel coming soon page" />
      <div className="lg:bg-bg-pattern lg:bg-no-repeat lg:bg-cover lg:p-16 xl:pl-container grid place-items-center lg:block">
        <header className="p-8 lg:p-0 lg:mb-30 place-self-start">
          <Logo title="Base Apparel logo" className="w-logo-mobile sm:w-logo-desktop" />
        </header>
        <img
          src={heroMobile}
          alt="Girl in Base Apparel clothes"
          className="block lg:hidden w-full h-64 sm:h-96 object-cover object-top"
        />
        <main className="max-w-content px-8 pt-16 pb-23 lg:p-0 text-center lg:text-left">
          <h1 className="font-light text-heading-mobile sm:text-heading tracking-heading uppercase mb-4 sm:mb-6">
            We&apos;re <span className="font-semibold text-neutral sm:leading-heading">coming soon</span>
          </h1>
          <p className="text-sm sm:text-base leading-text-mobile sm:leading-7 mb-8 sm:mb-10">
            Hello fellow shoppers! We&apos;re currently building our new fashion store. Add your email below to stay
            up-to-date with announcements and our launch deals.
          </p>
          <SubscriptionForm />
        </main>
      </div>
      <aside className="hidden lg:block">
        <img src={heroDesktop} alt="Girl in Base Apparel clothes" className="h-full object-cover" />
      </aside>
    </div>
  )
}

export default IndexPage
