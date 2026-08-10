import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { FiCheck, FiLock } from "react-icons/fi";
import { Container } from "@/components/ui/Section";
import { Field } from "@/components/ui/Field";
import { Button, ButtonLink } from "@/components/ui/Button";
import { CART_ITEMS, PAYMENT_METHODS } from "@/data/classroom";

const TAX_RATE = 0.05;

export default function CheckoutPage() {
  const [method, setMethod] = useState(PAYMENT_METHODS[2]);

  const subtotal = CART_ITEMS.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <>
      <Head>
        <title>Checkout — TOTC</title>
      </Head>

      <section className="bg-sky/60 py-10">
        <Container>
          <h1 className="text-2xl font-bold sm:text-3xl">Checkout</h1>
          <p className="mt-2 text-sm text-body">
            You are two steps away from your next course.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,22rem)]">
            {/* Payment form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl bg-white p-7 shadow-[0_14px_40px_-24px_rgba(47,50,125,0.4)] lg:p-9"
            >
              <fieldset>
                <legend className="text-lg font-semibold text-ink">
                  Payment method
                </legend>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {PAYMENT_METHODS.map((option) => {
                    const selected = method === option;

                    return (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border px-5 py-4 transition-colors ${
                          selected
                            ? "border-brand bg-brand-tint"
                            : "border-black/10 hover:border-brand/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment-method"
                          value={option}
                          checked={selected}
                          onChange={() => setMethod(option)}
                          className="sr-only"
                        />
                        <span
                          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                            selected
                              ? "border-brand bg-brand"
                              : "border-black/20"
                          }`}
                        >
                          {selected && (
                            <FiCheck
                              aria-hidden
                              className="text-[11px] text-white"
                            />
                          )}
                        </span>
                        <span className="text-sm font-medium text-ink">
                          {option}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-9 grid gap-5">
                <Field
                  label="Name on card"
                  name="cardName"
                  autoComplete="cc-name"
                  placeholder="Lina Anderson"
                />
                <Field
                  label="Card number"
                  name="cardNumber"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="0000 0000 0000 0000"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Expiry date"
                    name="cardExpiry"
                    autoComplete="cc-exp"
                    placeholder="MM / YY"
                  />
                  <Field
                    label="CVV"
                    name="cardCvc"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="123"
                  />
                </div>

                <Field
                  label="Billing country"
                  name="country"
                  autoComplete="country-name"
                  placeholder="United States"
                />
              </div>

              <label className="mt-7 flex items-start gap-3 text-sm text-body">
                <input
                  type="checkbox"
                  name="saveCard"
                  className="mt-1 h-4 w-4 accent-[#49bbbd]"
                />
                Save this card for my next purchase
              </label>

              <Button type="submit" size="lg" className="mt-8 w-full">
                Pay ${total.toFixed(2)}
              </Button>

              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">
                <FiLock aria-hidden />
                Payments are encrypted and processed securely.
              </p>
            </form>

            {/* Summary */}
            <aside className="rounded-2xl bg-sky/70 p-7">
              <h2 className="text-lg font-semibold text-ink">Order summary</h2>

              <ul className="mt-6 space-y-5">
                {CART_ITEMS.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-medium text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1 truncate text-xs text-muted">
                        {item.subtitle}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-ink">
                      ${item.price.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              <dl className="mt-7 space-y-3 border-t border-black/10 pt-6 text-sm">
                <div className="flex justify-between text-body">
                  <dt>Subtotal</dt>
                  <dd>${subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between text-body">
                  <dt>Tax</dt>
                  <dd>${tax.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between border-t border-black/10 pt-3 text-base font-bold text-ink">
                  <dt>Total</dt>
                  <dd>${total.toFixed(2)}</dd>
                </div>
              </dl>

              <ButtonLink
                href="/courses"
                variant="outline"
                size="sm"
                className="mt-7 w-full"
              >
                Keep browsing
              </ButtonLink>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
