import Hero from "@/components/Hero"
import MainFeatures from "@/components/MainFeatures"
import RevealCards from "@/components/RevealCards"
import SquishyPricing from "@/components/SquishyPricing"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Hero />
      <MainFeatures />
      <SquishyPricing />
    </section>
  )
}
