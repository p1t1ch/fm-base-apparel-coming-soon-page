import React from 'react'
import Seo from '@/components/Seo'
import { ReactComponent as Logo } from '@/icons/logo.svg'
import heroDesktop from '@/images/hero-desktop.jpg'
// import heroMobile from '@/images/hero-mobile.jpg'
import SubscriptionForm from '@/components/SubscriptionForm'

function IndexPage() {
  return (
    <div className="min-h-screen bg-bg-pattern bg-no-repeat bg-cover">
      <Seo title="Frontend Mentor: Base Apparel coming soon page" />
      <header>
        <Logo title="Base Apparel logo" />
      </header>
      <img src={heroDesktop} alt="Girl in Base Apparel clothes" />
      <main>
        <h1>
          We&apos;re <span>coming soon</span>
        </h1>
        <p>
          Hello fellow shoppers! We&apos;re currently building our new fashion store. Add your email below to stay
          up-to-date with announcements and our launch deals.
        </p>
        <SubscriptionForm />
      </main>
    </div>
  )
}

export default IndexPage
