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
    <form className={`${className}`} noValidate onSubmit={handleSubmit} {...props}>
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
          className={`w-full h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-transparent border ${
            error ? 'border-error' : 'border-primary border-opacity-50 focus:border-opacity-100'
          } placeholder-primary placeholder-opacity-50 text-sm sm:text-base text-neutral transition-colors`}
        />
        <div className="absolute right-0 top-0 bottom-0 flex items-center">
          {error && <Error className="mr-2 sm:mr-4" />}
          <button
            type="submit"
            className="grid place-items-center w-16 sm:w-button h-full bg-gradient-to-br from-primary-light to-primary-dark hover:from-start-hover hover:to-end-hover focus-visible:from-start-hover focus-visible:to-end-hover rounded-full shadow transition-colors"
          >
            <Arrow title="Submit" />
          </button>
        </div>
      </div>
      <p
        role="alert"
        className={`text-error text-extrasmall text-left pl-6 sm:pl-8 ${error ? 'visible' : 'invisible'}`}
      >
        {error || '&nbsp;'}
      </p>
    </form>
  )
}

export default SubscriptionForm
