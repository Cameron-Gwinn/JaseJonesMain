import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Jase Jones & Associates. We work with clients in Texas and across the US.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="text-xs tracking-widest uppercase text-taupe mb-4">Let's Talk</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal max-w-2xl leading-tight">
              Every great home begins here.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            {/* Form */}
            <AnimatedSection className="lg:col-span-2">
              <ContactForm />
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.15}>
              <div className="flex flex-col gap-10">
                <div>
                  <p className="text-xs tracking-widest uppercase text-taupe mb-3">Studio</p>
                  <p className="text-charcoal/70">Dallas, Texas</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-taupe mb-3">Email</p>
                  <a
                    href="mailto:info@jasejones.com"
                    className="text-charcoal/70 hover:text-charcoal transition-colors"
                  >
                    info@jasejones.com
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-taupe mb-3">Phone</p>
                  <a
                    href="tel:4694747022"
                    className="text-charcoal/70 hover:text-charcoal transition-colors"
                  >
                    469.474.7022
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-taupe mb-3">Follow</p>
                  <a
                    href="https://www.instagram.com/jasejonesandassociates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal/70 hover:text-charcoal transition-colors text-sm"
                  >
                    @jasejonesandassociates
                  </a>
                </div>
                <div className="border-t border-sand-dark pt-8">
                  <p className="text-xs text-charcoal/40 leading-relaxed">
                    We are currently accepting new clients in select locations. Initial consultations
                    are conducted via phone or video — we work across the US and internationally.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
