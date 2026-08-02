import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Backpack,
  Compass,
  Mountain,
  ShieldCheck,
  Tent,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Quality Equipment",
    description:
      "Browse reliable camping and outdoor gear from trusted providers.",
    icon: Tent,
  },
  {
    title: "Affordable Rentals",
    description:
      "Rent only when you need it instead of buying expensive equipment.",
    icon: Backpack,
  },
  {
    title: "Secure Booking",
    description: "Simple booking process with secure online payment.",
    icon: ShieldCheck,
  },
  {
    title: "Adventure Ready",
    description: "Everything you need for hiking, camping, trekking and more.",
    icon: Compass,
  },
];

const steps = [
  {
    number: "01",
    title: "Browse Gears",
    description:
      "Explore tents, backpacks, sleeping bags, cooking gear and more.",
  },
  {
    number: "02",
    title: "Choose Rental Dates",
    description:
      "Select your preferred rental period that fits your adventure.",
  },
  {
    number: "03",
    title: "Book Securely",
    description: "Reserve your equipment through our secure booking system.",
  },
  {
    number: "04",
    title: "Explore Outdoors",
    description:
      "Pick up your gear, enjoy your adventure and return it when you're done.",
  },
];

const stats = [
  {
    value: "500+",
    label: "Gear Items",
  },
  {
    value: "100+",
    label: "Happy Renters",
  },
  {
    value: "50+",
    label: "Providers",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

const AboutPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-linear-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full border bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              About GearUp
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Adventure Starts With The Right Gear
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              GearUp helps outdoor enthusiasts rent quality camping and
              adventure equipment without the high cost of ownership. Whether
              you&apos;re planning your first camping trip or your next mountain
              adventure, we&apos;ve got the gear you need.
            </p>

            <div className="mt-10">
              <Button size="lg">
                <Link href="/" className="flex gap-2 items-center">
                  Browse Gears
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Making Outdoor Adventures More Accessible
            </h2>

            <p className="mt-6 text-muted-foreground leading-8">
              Outdoor equipment can be expensive, especially if you only use it
              a few times a year. GearUp was built to solve this problem by
              making quality outdoor gear available through an easy and
              affordable rental platform.
            </p>

            <p className="mt-4 text-muted-foreground leading-8">
              We believe adventures should be limited by imagination—not by the
              cost of equipment.
            </p>
          </div>

          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="flex h-full flex-col items-center justify-center p-10 text-center">
              <Mountain className="h-16 w-16 text-primary" />

              <h3 className="mt-6 text-2xl font-semibold">
                Explore More. Own Less.
              </h3>

              <p className="mt-4 text-muted-foreground">
                Rent what you need, when you need it, and enjoy every adventure
                without unnecessary costs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/40 py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Why Choose GearUp?</h2>

            <p className="mt-4 text-muted-foreground">
              Everything you need for a smooth rental experience.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card key={feature.title}>
                  <CardContent className="p-8">
                    <div className="w-fit rounded-xl bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="container mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold">How GearUp Works</h2>

          <p className="mt-4 text-muted-foreground">
            Renting outdoor equipment is quick and easy.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.number}>
              <CardContent className="p-8">
                <span className="text-4xl font-black text-primary/20">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <h3 className="text-4xl font-bold">{stat.value}</h3>

                <p className="mt-2 opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
