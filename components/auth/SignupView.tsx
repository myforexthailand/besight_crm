"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import AuthSocialButtons from "./AuthSocialButtons";
import PasswordToggleInput from "./PasswordToggleInput";
import { completeAuth } from "../../lib/auth";
import Icon from "../Icon";

export default function SignupView() {
  const [tvError, setTvError] = useState(false);
  const tvRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const tradingview = (form.elements.namedItem("tradingview") as HTMLInputElement).value.trim();
    if (!tradingview) {
      setTvError(true);
      tvRef.current?.focus();
      return;
    }
    setTvError(false);
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    completeAuth({ email, tradingview });
  }

  return (
    <div className="auth">
      <aside className="auth-aside">
        <div className="auth-aside-top">
          <Link className="auth-back" href="/">
            <Icon name="chevron_left" />
            Back to site
          </Link>
        </div>

        <div className="auth-aside-center">
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative lockup logo, height set by CSS */}
          <img className="auth-aside-logo" src="/img/Horizontal-logo-c.png" alt="BeSight" />
          <h1>
            Get Started <span className="grad">with Us</span>
          </h1>
          <p>Complete these easy steps to set up your trading account.</p>

          <ol className="auth-steps">
            <li className="auth-step is-active">
              <span className="num">1</span>
              <span className="label">Create your account</span>
            </li>
            <li className="auth-step">
              <span className="num">2</span>
              <span className="label">Connect your markets</span>
            </li>
            <li className="auth-step">
              <span className="num">3</span>
              <span className="label">Set up your first strategy</span>
            </li>
          </ol>
        </div>
      </aside>

      <main className="auth-main">
        <div className="auth-form-wrap">
          <Link className="auth-main-brand" href="/" aria-label="BeSight home">
            {/* eslint-disable-next-line @next/next/no-img-element -- decorative lockup logo, height set by CSS */}
            <img src="/img/Horizontal-logo-c.png" alt="BeSight" />
          </Link>

          <div className="auth-head">
            <h2>Sign Up Account</h2>
            <p>Enter your personal data to create your account.</p>
          </div>

          <AuthSocialButtons />

          <div className="auth-divider">Or</div>

          <form className="auth-form" noValidate onSubmit={handleSubmit}>
            <div className="auth-row">
              <div className="auth-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="auth-input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="eg. John"
                  autoComplete="given-name"
                />
              </div>
              <div className="auth-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="auth-input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="eg. Francisco"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="email">Email</label>
              <input
                className="auth-input"
                type="email"
                id="email"
                name="email"
                placeholder="eg. johnfrans@gmail.com"
                autoComplete="email"
              />
            </div>

            <div className="auth-field">
              <label htmlFor="tradingview">
                TradingView Username <span className="req-mark">*</span>
              </label>
              <input
                className="auth-input"
                type="text"
                id="tradingview"
                name="tradingview"
                placeholder="eg. @johntrader"
                required
                aria-required="true"
                ref={tvRef}
                style={{ borderColor: tvError ? "#DD2CB8" : undefined }}
                onChange={() => tvError && setTvError(false)}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="address">
                Address <span className="opt-mark">(optional)</span>
              </label>
              <input
                className="auth-input"
                type="text"
                id="address"
                name="address"
                placeholder="eg. 123 Market St, New York"
                autoComplete="street-address"
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <PasswordToggleInput
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="new-password"
                minLength={8}
              />
            </div>
            <p className="auth-hint">Must be at least 8 characters.</p>

            <button type="submit" className="auth-submit">
              Sign Up
            </button>
          </form>

          <p className="auth-alt">
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
