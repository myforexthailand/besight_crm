"use client";

import Link from "next/link";
import AuthSocialButtons from "./AuthSocialButtons";
import PasswordToggleInput from "./PasswordToggleInput";
import { completeAuth } from "../../lib/auth";
import Icon from "../Icon";

export default function LoginView() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    completeAuth({ email });
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
            Welcome Back, <span className="grad">Trader</span>
          </h1>
          <p>Log in to pick up right where you left off.</p>

          <ul className="auth-feats">
            <li className="auth-feat">
              <Icon name="bolt" />
              Real-time signals across all your markets
            </li>
            <li className="auth-feat">
              <Icon name="trending_up" />
              10,000+ backtested setups at your fingertips
            </li>
            <li className="auth-feat">
              <Icon name="shield" />
              Built-in risk management to protect your capital
            </li>
          </ul>
        </div>
      </aside>

      <main className="auth-main">
        <div className="auth-form-wrap">
          <Link className="auth-main-brand" href="/" aria-label="BeSight home">
            {/* eslint-disable-next-line @next/next/no-img-element -- decorative lockup logo, height set by CSS */}
            <img src="/img/Horizontal-logo-c.png" alt="BeSight" />
          </Link>

          <div className="auth-head">
            <h2>Log In to Your Account</h2>
            <p>Welcome back — enter your details to continue.</p>
          </div>

          <AuthSocialButtons />

          <div className="auth-divider">Or</div>

          <form className="auth-form" noValidate onSubmit={handleSubmit}>
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
              <label htmlFor="password">Password</label>
              <PasswordToggleInput
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            <div className="auth-inline">
              <label className="auth-check">
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <a className="auth-link" href="#">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="auth-submit">
              Log In
            </button>
          </form>

          <p className="auth-alt">
            Don&apos;t have an account? <Link href="/signup">Sign up</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
