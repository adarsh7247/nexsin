"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Wrench, Search, MapPin, Shield, Clock, Star, UserCheck, Users, ArrowRight } from "lucide-react"

export default function GetStartedPage() {
  const router = useRouter()
  const [service, setService] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")

  function handleQuickStart(e: React.FormEvent) {
    e.preventDefault()
    const q = new URLSearchParams()
    if (service) q.set("service", service)
    if (location) q.set("loc", location)
    if (date) q.set("date", date)
    router.push(`/${q.toString() ? `?${q.toString()}` : ""}#services`)
  }

  return (
    <main className="min-h-screen bg-[#1e3a8a]">
      {/* Top bar */}
      <header className="bg-[#1e40af] border-[#3b82f6] border-b">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Wrench className="h-6 w-6 sm:h-7 sm:w-7 text-[#007BFF]" />
            <span className="text-xl sm:text-2xl font-bold text-white">FixMate</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="ghost" asChild className="text-[#007BFF] text-sm sm:text-base px-2 sm:px-4">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-[#00C49A] hover:bg-[#00B894] text-sm sm:text-base px-3 sm:px-4">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center lg:text-left">
            <Badge className="bg-[#E3F2FD] text-[#007BFF] hover:bg-[#E3F2FD] mb-4 text-xs sm:text-sm">
              Quick onboarding
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Get Started with <span className="text-[#60a5fa]">FixMate</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#cbd5e1] mt-4">
              Choose your path and book trusted local professionals in minutes, or join as a verified pro.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-4 sm:mt-6 text-xs sm:text-sm text-[#cbd5e1]">
              <div className="flex items-center gap-2">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-[#007BFF]" />
                Verified providers
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-[#007BFF]" />
                Same-day service
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-[#007BFF]" />
                4.8/5 rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paths */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Customer path */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#007BFF]" />
                <CardTitle className="text-[#343A40] text-lg sm:text-xl">I need a service</CardTitle>
              </div>
              <CardDescription className="text-[#6C757D] text-sm sm:text-base">
                Book a reliable professional for repairs and maintenance.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
              <ul className="space-y-2 text-[#343A40] text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#00C49A] flex-shrink-0" />
                  Browse categories like Plumbing, Electrical, AC Repair, Laptop Repair
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#00C49A] flex-shrink-0" />
                  Transparent pricing and verified reviews
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#00C49A] flex-shrink-0" />
                  Track your booking and pay securely
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-[#00C49A] hover:bg-[#00B894] text-sm sm:text-base">
                  <Link href="/#services">Browse services</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#007BFF] text-[#007BFF] hover:bg-[#E3F2FD] bg-transparent text-sm sm:text-base"
                >
                  <Link href="/login">Create account</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pro path */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5 sm:h-6 sm:w-6 text-[#007BFF]" />
                <CardTitle className="text-[#343A40] text-lg sm:text-xl">I am a professional</CardTitle>
              </div>
              <CardDescription className="text-[#6C757D] text-sm sm:text-base">
                Join FixMate as a verified service provider and grow your business.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
              <ul className="space-y-2 text-[#343A40] text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#00C49A] flex-shrink-0" />
                  Get matched with nearby customers
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#00C49A] flex-shrink-0" />
                  Secure payments and in-app reviews
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#00C49A] flex-shrink-0" />
                  Flexible hours, full control over your schedule
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-[#007BFF] hover:bg-[#0067d6] text-sm sm:text-base">
                  <Link href="/login">Become a Pro</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#007BFF] text-[#007BFF] hover:bg-[#E3F2FD] bg-transparent text-sm sm:text-base"
                >
                  <Link href="/#how-it-works">How it works</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick request form */}
      <section className="py-8 sm:py-12 bg-[#1e40af]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-[#343A40] text-lg sm:text-xl">Start a quick request</CardTitle>
              <CardDescription className="text-[#6C757D] text-sm sm:text-base">
                Tell us what you need and where you are. We ll show matching pros.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleQuickStart} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <Label htmlFor="service" className="text-[#343A40] text-sm sm:text-base">
                    Service
                  </Label>
                  <div className="relative mt-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6C757D]" />
                    <Input
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      placeholder="e.g., Plumbing, AC repair"
                      className="pl-9 h-11 sm:h-12 rounded-xl border-2 border-gray-200 focus:border-[#007BFF] text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="md:col-span-1">
                  <Label htmlFor="location" className="text-[#343A40] text-sm sm:text-base">
                    Location
                  </Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6C757D]" />
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City or PIN code"
                      className="pl-9 h-11 sm:h-12 rounded-xl border-2 border-gray-200 focus:border-[#007BFF] text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="md:col-span-1">
                  <Label htmlFor="date" className="text-[#343A40] text-sm sm:text-base">
                    Preferred date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-2 h-11 sm:h-12 rounded-xl border-2 border-gray-200 focus:border-[#007BFF] text-sm sm:text-base"
                  />
                </div>
                <div className="md:col-span-3 flex flex-col sm:flex-row gap-3 mt-2">
                  <Button
                    type="submit"
                    className="h-11 sm:h-12 rounded-xl bg-[#00C49A] hover:bg-[#00B894] flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Find pros
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 sm:h-12 rounded-xl border-[#007BFF] text-[#007BFF] hover:bg-[#E3F2FD] bg-transparent text-sm sm:text-base"
                  >
                    <Link href="/#services">Explore all services</Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">You are one step away</h2>
          <p className="text-[#E3F2FD] text-base sm:text-lg mt-3">
            Join thousands of customers who fix things faster with FixMate.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto sm:max-w-none">
            <Button asChild className="bg-[#00C49A] hover:bg-[#00B894] h-11 sm:h-12 text-sm sm:text-base">
              <Link href="/#services">Start booking</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#007BFF] bg-transparent h-11 sm:h-12 text-sm sm:text-base"
            >
              <Link href="/login">Sign in</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
