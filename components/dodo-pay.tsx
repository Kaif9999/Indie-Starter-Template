"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check, Brain, Menu, X, ArrowRight, Mail, Linkedin, Twitter, Github, Star } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useSession } from "@/lib/auth/auth-client"

// Export plans so webhook can use the same product IDs
export const plans = [
    {
        link: "https://checkout.dodopayments.com/buy/product id ",
        priceId: "price id here",
        price: 10,
        duration: "/month",
    },
    {
        link: "https://checkout.dodopayments.com/buy/pdt_yearly_plan_id", // Replace with actual yearly plan ID
        priceId: "pdt_yearly_plan_id", // This should match PRO_YEARLY_PRODUCT_ID in webhook
        price: 96,
        duration: "/year",
    },
]

export const DODO_PRODUCT_IDS = {
    LIFETIME: "pdt_lifetime_plan_id", 
    PRO_MONTHLY: "pdt_monthly_plan_id",
    PRO_YEARLY: "pdt_yearly_plan_id",
} as const;

export default function Dodopricing() {
    const { data: session } = useSession()
    const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly")
    const [isLoading, setIsLoading] = useState(false)

    // Get current plan based on billing interval
    const currentPlan = plans.find((plan) =>
        billingInterval === "monthly" ? plan.duration === "/month" : plan.duration === "/year"
    )

    const getPrice = (basePrice: number) => {
        if (billingInterval === "yearly") {
            return currentPlan?.price || 96
        }
        return currentPlan?.price || 10
    }

    const getYearlyMonthlyPrice = () => {
        if (billingInterval === "yearly") {
            return Math.round((currentPlan?.price || 96) / 12)
        }
        return currentPlan?.price || 10
    }

    const getUpgradeUrl = () => {
        if (currentPlan?.link) {
            const baseUrl = currentPlan.link
            const email = session?.user?.email
            // Dodo Payments uses different parameter name for prefilled email
            return email 
                ? `${baseUrl}?quantity=1&prefilled_email=${encodeURIComponent(email)}&redirect_url=your website url here`
                : `${baseUrl}?quantity=1&redirect_url=your website url here`
        }
        // Fallback
        return ""
    }

    const handleLifetimeSubscription = () => {
        setIsLoading(true)
        const email = session?.user?.email
        const lifetimeUrl = email 
            ? `https://checkout.dodopayments.com/buy/${DODO_PRODUCT_IDS.LIFETIME}?quantity=1&prefilled_email=${encodeURIComponent(email)}&redirect_url=your website url here`
            : `https://checkout.dodopayments.com/buy/${DODO_PRODUCT_IDS.LIFETIME}?quantity=1&redirect_url=your website url here`
        
        window.location.href = lifetimeUrl
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Star className="w-4 h-4 fill-current" />
                        Simple, transparent pricing
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                        Choose Your Perfect
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Plan</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Transform your data analysis workflow with our powerful AI-driven tools. Start free, upgrade when ready.
                    </p>
                </motion.div>

                {/* Billing Toggle with light theme */}
                <div className="flex justify-center mb-16">
                    <div className="p-1 bg-white rounded-full border border-gray-200 shadow-lg">
                        <RadioGroup
                            defaultValue="monthly"
                            value={billingInterval}
                            onValueChange={(value) => setBillingInterval(value as "monthly" | "yearly")}
                            className="relative grid grid-cols-2 w-[320px] gap-1"
                        >
                            {/* Sliding Background */}
                            <motion.div
                                className="absolute inset-1 w-[calc(50%-4px)] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-sm"
                                initial={false}
                                animate={{
                                    x: billingInterval === "yearly" ? "calc(100% + 4px)" : 0
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25
                                }}
                            />

                            {/* Monthly Option */}
                            <div className="relative">
                                <RadioGroupItem value="monthly" id="monthly" className="sr-only" />
                                <label
                                    htmlFor="monthly"
                                    className={`relative flex flex-col items-center justify-center px-4 py-3 rounded-full cursor-pointer transition-all duration-200 ${
                                        billingInterval === "monthly" 
                                            ? "text-white" 
                                            : "text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                    <span className="font-semibold text-sm">Monthly</span>
                                    <span className="text-xs mt-0.5 opacity-90">
                                        ${plans[0].price}/month
                                    </span>
                                </label>
                            </div>

                            {/* Yearly Option */}
                            <div className="relative">
                                <RadioGroupItem value="yearly" id="yearly" className="sr-only" />
                                <label
                                    htmlFor="yearly"
                                    className={`relative flex flex-col items-center justify-center px-4 py-3 rounded-full cursor-pointer transition-all duration-200 ${
                                        billingInterval === "yearly" 
                                            ? "text-white" 
                                            : "text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                    <span className="font-semibold text-sm">Yearly</span>
                                    <motion.div 
                                        className="flex items-center gap-1 text-xs mt-0.5"
                                        initial={false}
                                        animate={{ 
                                            opacity: billingInterval === "yearly" ? 1 : 0.9
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className={billingInterval === "yearly" ? "text-white" : "text-green-600"}>
                                            ${Math.round(plans[1].price / 12)}/mo
                                        </span>
                                        <span className="opacity-50">•</span>
                                        <span className={billingInterval === "yearly" ? "text-white" : "text-purple-600"}>
                                            Save ${(plans[0].price * 12) - plans[1].price}
                                        </span>
                                    </motion.div>
                                </label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                            <p className="text-gray-600">
                                Perfect for students and hobbyists getting started
                            </p>
                        </div>
                        <div className="text-center mb-8">
                            <div className="text-5xl font-bold text-gray-900">$0</div>
                            <div className="text-gray-500 mt-1">Forever free</div>
                        </div>
                        <div className="space-y-4 mb-8">
                            <p className="font-semibold text-gray-900">What's included:</p>
                            <ul className="space-y-3 text-gray-600">
                                {[
                                    { feature: "1 Free Visualizations per day", available: true },
                                    { feature: "4 Free Analyses per day", available: true },
                                    { feature: "Basic dashboard access", available: true },
                                    { feature: "Community support", available: true },
                                    { feature: "Advanced Features", available: false },
                                    { feature: "Priority Support", available: false },
                                    { feature: "Data Export", available: false },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        {item.available ? (
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        ) : (
                                            <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                                        )}
                                        <span className={item.available ? "text-gray-700" : "text-gray-400"}>
                                            {item.feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="w-full py-3 px-4 rounded-xl bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors cursor-not-allowed">
                            Current Plan
                        </button>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative bg-white rounded-2xl p-8 border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-shadow duration-300 scale-105"
                    >
                        {/* Most Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                Most Popular
                            </div>
                        </div>

                        <div className="text-center mb-6 pt-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                            <p className="text-gray-600">
                                For professionals and growing teams
                            </p>
                        </div>
                        <div className="text-center mb-8">
                            <motion.div 
                                className="text-5xl font-bold text-gray-900"
                                initial={false}
                                animate={{ 
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{ duration: 0.3 }}
                                key={billingInterval}
                            >
                                ${billingInterval === "yearly" ? getYearlyMonthlyPrice() : getPrice(10)}
                                <span className="text-2xl font-normal text-gray-500">/mo</span>
                            </motion.div>
                            <div className="text-gray-500 mt-1">
                                {billingInterval === "yearly" ? (
                                    <>
                                        <span className="text-green-600 font-medium">${currentPlan?.price}/year</span>
                                        <span className="block text-sm mt-1">
                                            Save ${(plans[0].price * 12) - (currentPlan?.price || 96)} annually
                                        </span>
                                    </>
                                ) : (
                                    `$${currentPlan?.price} billed monthly`
                                )}
                            </div>
                        </div>
                        <div className="space-y-4 mb-8">
                            <p className="font-semibold text-gray-900">Everything in Free, plus:</p>
                            <ul className="space-y-3 text-gray-600">
                                {[
                                    "Unlimited Visualizations",
                                    "Unlimited Analyses per day",
                                    "Advanced AI insights",
                                    "Priority Support",
                                    "Beta Access to new features",
                                    "Data Export capabilities",
                                    "Custom integrations",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link
                            href={getUpgradeUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex justify-center items-center py-4 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Upgrade to Pro {billingInterval === "yearly" ? "(Yearly)" : "(Monthly)"}
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </motion.div>

                    {/* Lifetime Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="absolute top-4 right-4">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                Best Value
                            </div>
                        </div>

                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Lifetime</h3>
                            <p className="text-gray-600">
                                One payment, lifetime access
                            </p>
                        </div>
                        <div className="text-center mb-8">
                            <motion.div 
                                className="text-5xl font-bold text-gray-900"
                                initial={false}
                                animate={{ 
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{ duration: 0.3 }}
                                key={billingInterval}
                            >
                                $250
                                <span className="text-xl font-normal text-gray-500">
                                    /lifetime
                                </span>
                            </motion.div>
                            <div className="text-gray-500 mt-1">
                                One-time payment • No recurring fees
                            </div>
                        </div>
                        <div className="space-y-4 mb-8">
                            <p className="font-semibold text-gray-900">Everything in Pro, plus:</p>
                            <ul className="space-y-3 text-gray-600">
                                {[
                                    "Lifetime access to all features",
                                    "All future updates included",
                                    "VIP priority support",
                                    "Exclusive lifetime community",
                                    "Early access to new products",
                                    "Dedicated account manager",
                                    "Custom feature requests",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button 
                            onClick={handleLifetimeSubscription}
                            disabled={isLoading}
                            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Processing...
                                </div>
                            ) : (
                                <>
                                    Get Lifetime Access
                                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                                </>
                            )}
                        </button>
                    </motion.div>
                </div>

                {/* FAQ or Additional Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Not sure which plan is right for you?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Start with our free plan and upgrade anytime. All plans include our core features with different usage limits and support levels.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                Contact Sales
                            </Link>
                            <Link 
                                href="/demo" 
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                            >
                                Try Demo
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Call to Action */}
            <section className="relative z-10 py-24 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Ready to Transform Your
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Data Analysis?</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join thousands of data scientists and analysts who have already discovered the power of AI-driven analysis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/signup">
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    Get Started Now 
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <Link href="/learn-more">
                                <button className="px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

