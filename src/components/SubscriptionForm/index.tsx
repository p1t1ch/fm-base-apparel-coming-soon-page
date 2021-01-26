import React, { useState } from 'react'
import { ReactComponent as Arrow } from '@/icons/arrow.svg'
import { ReactComponent as Error } from '@/icons/error.svg'

function SubscriptionForm({ className = '', onSubmit, ...props }: React.HTMLProps<HTMLFormElement>) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim()
    const validEmailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    setEmail(value)
    if (!value) {
      setError('Whoops! It looks like you forgot to add your email')
    } else if (!validEmailReg.test(value)) {
      setError('Please provide a valid email')
    } else {
      setError(null)
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || error) return
    if (onSubmit) onSubmit(e)
    setEmail('')
    alert(`${email} was successfuly added to the mailing list`)
  }

  return (
    <form
      className={`grid sm:grid-cols-form gap-3 sm:gap-4 ${className}`}
      noValidate
      onSubmit={handleSubmit}
      {...props}
    >
      <label htmlFor="email" className="sr-only">
        Your email address
      </label>
      <div className="relative">
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
          placeholder="Email Address"
          className={`w-full h-10 sm:h-14 px-8 rounded-full border ${
            error ? 'border-error' : 'border-secondary focus:border-primary'
          } placeholder-secondary-placeholder text-xs sm:text-base transition-colors`}
        />
        {error && <Error />}
      </div>
      <button
        type="submit"
        className="h-10 sm:h-14 text-center bg-primary text-white hover:bg-opacity-80 focus-visible:bg-opacity-80 rounded-full shadow text-xs sm:text-base font-semibold transition-colors"
      >
        <Arrow title="Submit" />
      </button>
      {error && (
        <p
          role="alert"
          className="text-error text-extrasmall sm:text-xs italic sm:absolute sm:left-8 sm:-bottom-8 mb-2"
        >
          {error}
        </p>
      )}
    </form>
  )
}

export default SubscriptionForm
