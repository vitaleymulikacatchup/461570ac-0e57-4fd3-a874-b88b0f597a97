"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Trophy, Zap, ShoppingBag, Ticket, Star, Crown, BarChart3, Flag, Heart, Handshake, HelpCircle, Newspaper, Mail, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export default function WorldCupPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Teams", id: "teams" },
            { name: "Schedule", id: "schedule" },
            { name: "Features", id: "features" },
            { name: "Tickets", id: "tickets" },
            { name: "News", id: "blog" }
          ]}
          brandName="2026 World Cup"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="2026 FIFA World Cup"
          description="Experience the most exciting World Cup ever as 48 teams compete across the United States, Canada, and Mexico"
          tag="USA | Canada | Mexico"
          tagIcon={Trophy}
          buttons={[
            { text: "View Teams", href: "teams" },
            { text: "Buy Tickets", href: "tickets" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651266861-16ax3481.jpg"
          imageAlt="2026 FIFA World Cup stadium with participating teams"
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Tournament Info"
          title="Three Nations, One Dream"
          description="For the first time in World Cup history, three nations will co-host the tournament, bringing together the best of North American football culture and creating an unprecedented experience for fans worldwide."
          buttons={[
            { text: "Learn More", href: "about" },
            { text: "Host Cities", href: "cities" }
          ]}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651267899-xdhvb00c.jpg",
            imageAlt: "USA team preparation for 2026 World Cup"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651268977-gm7l4x15.jpg",
            imageAlt: "Canada team training for home World Cup"
          }}
          textboxLayout="default"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardNine
          title="Revolutionary Features"
          description="Experience the 2026 World Cup like never before with cutting-edge technology and fan experiences"
          tag="Innovation"
          tagIcon={Zap}
          buttons={[
            { text: "Explore Features", href: "features" }
          ]}
          showStepNumbers={true}
          features={[
            {
              id: 1,
              title: "Smart Stadiums",
              description: "State-of-the-art venues with AI-powered crowd management, sustainable energy systems, and immersive fan technologies across all host cities.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651273789-q5s10ps1.jpg",
                imageAlt: "Modern smart stadium technology"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651275024-3sd9i9m4.jpg",
                imageAlt: "Advanced broadcasting setup"
              }
            },
            {
              id: 2,
              title: "Mobile Experience",
              description: "Complete World Cup companion app with real-time match updates, augmented reality features, ticket management, and social fan interactions.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651276080-u9qmlhke.jpg",
                imageAlt: "World Cup mobile app interface"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651270749-xggl28f2.jpg",
                imageAlt: "Live match tracking feature"
              }
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Official Merchandise"
          description="Get your hands on authentic 2026 World Cup merchandise and team gear"
          tag="Official Store"
          tagIcon={ShoppingBag}
          products={[
            {
              id: "jersey-usa",
              name: "USA National Team Jersey 2026",
              price: "$89.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651267899-xdhvb00c.jpg",
              imageAlt: "USA national team official jersey"
            },
            {
              id: "jersey-canada",
              name: "Canada Home Kit 2026",
              price: "$85.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651268977-gm7l4x15.jpg",
              imageAlt: "Canada national team home jersey"
            },
            {
              id: "jersey-mexico",
              name: "Mexico Away Jersey 2026",
              price: "$87.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651269829-svj3s1dw.jpg",
              imageAlt: "Mexico national team away jersey"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Match Tickets"
          description="Secure your seats for the biggest football event in the world"
          tag="Tickets"
          tagIcon={Ticket}
          plans={[
            {
              id: "group-stage",
              badge: "Best Value",
              badgeIcon: Star,
              price: "$150",
              subtitle: "Group Stage Matches",
              features: [
                "Access to group stage matches",
                "Stadium entry included",
                "Official match program",
                "Food & beverage discounts"
              ],
              buttons: [
                { text: "Buy Now", href: "https://tickets.fifa.com" },
                { text: "More Info", href: "ticket-info" }
              ]
            },
            {
              id: "knockout",
              badge: "Most Popular",
              badgeIcon: Trophy,
              price: "$350",
              subtitle: "Knockout Stage Access",
              features: [
                "Round of 16 & Quarter-finals",
                "Premium seating sections",
                "Fast-track entry",
                "Complimentary refreshments",
                "Official merchandise package"
              ],
              buttons: [
                { text: "Buy Now", href: "https://tickets.fifa.com" },
                { text: "More Info", href: "knockout-tickets" }
              ]
            },
            {
              id: "final",
              badge: "VIP Experience",
              badgeIcon: Crown,
              price: "$1,200",
              subtitle: "Semi-finals & Final",
              features: [
                "Semi-final & final access",
                "VIP hospitality lounge",
                "Meet & greet opportunities",
                "Premium gift package",
                "Exclusive viewing areas"
              ],
              buttons: [
                { text: "Buy Now", href: "https://tickets.fifa.com" },
                { text: "Contact Sales", href: "vip-sales" }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Tournament Statistics"
          description="The biggest and most inclusive World Cup in history"
          tag="By The Numbers"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "teams",
              icon: "Users",
              title: "Participating Teams",
              value: "48"
            },
            {
              id: "matches",
              icon: "Calendar",
              title: "Total Matches",
              value: "104"
            },
            {
              id: "stadiums",
              icon: "MapPin",
              title: "Host Stadiums",
              value: "16"
            },
            {
              id: "capacity",
              icon: "Users",
              title: "Total Capacity",
              value: "5.5M+"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Featured National Teams"
          description="Get to know some of the top contenders for the 2026 World Cup"
          tag="Top Contenders"
          tagIcon={Flag}
          members={[
            {
              id: "team-brazil",
              name: "Team Brazil",
              role: "5-time Champions",
              description: "The most successful team in World Cup history, Brazil brings their trademark flair and technical excellence to North America.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651270749-xggl28f2.jpg",
              imageAlt: "Brazil national football team"
            },
            {
              id: "team-argentina",
              name: "Team Argentina",
              role: "Defending Champions",
              description: "Fresh from their Qatar 2022 victory, Argentina aims to defend their title with Messi potentially making his final World Cup appearance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651271621-8tnac4lw.jpg",
              imageAlt: "Argentina national football team"
            },
            {
              id: "team-germany",
              name: "Team Germany",
              role: "4-time Champions",
              description: "Germany's renowned efficiency and tactical discipline make them perennial favorites in every World Cup tournament.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651272868-hsxt0ixc.jpg",
              imageAlt: "Germany national football team"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          textboxLayout="default"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Fans Are Saying"
          description="Hear from football enthusiasts excited about the 2026 World Cup"
          tag="Fan Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "fan1",
              name: "Carlos Rodriguez",
              role: "Lifelong Fan",
              company: "Mexico City Supporters",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651277217-dtdu6erj.jpg",
              imageAlt: "Carlos Rodriguez, Mexico football fan"
            },
            {
              id: "fan2",
              name: "Sarah Thompson",
              role: "Season Ticket Holder",
              company: "Toronto FC Supporter",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651278084-65rs3dqm.jpg",
              imageAlt: "Sarah Thompson, Canada football fan"
            },
            {
              id: "fan3",
              name: "Michael Johnson",
              role: "USA Supporter",
              company: "American Outlaws",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651278999-36nxvt67.jpg",
              imageAlt: "Michael Johnson, USA football fan"
            },
            {
              id: "fan4",
              name: "Emma Wilson",
              role: "Youth Coach",
              company: "Seattle Sounders Academy",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651279897-1uwx1qso.jpg",
              imageAlt: "Emma Wilson, football coach and fan"
            },
            {
              id: "fan5",
              name: "Diego Martinez",
              role: "Fan Group Leader",
              company: "Los Angeles FC Supporters",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651281124-3zi5dbqe.jpg",
              imageAlt: "Diego Martinez, LAFC supporter"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          textboxLayout="default"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Official Partners"
          description="Trusted by the world's leading sports and entertainment organizations"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651281976-xc0qp8zc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651283638-n7mq4qsr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651284648-wjbcvr4r.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651285574-nl0e7b7p.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651286786-8v7d882p.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651287705-hxgr2r6n.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651288458-ewe53clk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651289299-r0m2goyf.jpg"
          ]}
          textboxLayout="default"
          speed={30}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about the 2026 FIFA World Cup"
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "dates",
              title: "When will the 2026 World Cup take place?",
              content: "The 2026 FIFA World Cup is scheduled to take place from June 11 to July 19, 2026, across the United States, Canada, and Mexico."
            },
            {
              id: "tickets",
              title: "How can I purchase tickets?",
              content: "Tickets will be available through the official FIFA ticketing website. Sales will begin in phases, starting with registered fans and FIFA members getting priority access."
            },
            {
              id: "cities",
              title: "Which cities will host matches?",
              content: "The tournament will be held in 16 cities across the three host nations, including major metropolitan areas like New York, Los Angeles, Toronto, and Mexico City."
            },
            {
              id: "teams",
              title: "How many teams will participate?",
              content: "For the first time, 48 teams will compete in the World Cup, expanded from the previous 32-team format, allowing more nations to participate."
            },
            {
              id: "format",
              title: "What is the new tournament format?",
              content: "The 48 teams will be divided into 16 groups of 3 teams each, with the top 2 from each group advancing to a 32-team knockout stage."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest World Cup News"
          description="Stay updated with the latest news and insights about the 2026 World Cup"
          tag="News & Updates"
          tagIcon={Newspaper}
          blogs={[
            {
              id: "blog1",
              category: "History",
              title: "World Cup Legacy: From Uruguay 1930 to 2026",
              excerpt: "Exploring the rich history of the FIFA World Cup and how the 2026 tournament will make history as the first tri-nation hosted event.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651290153-3saee40n.jpg",
              imageAlt: "World Cup trophy and historical moments",
              authorName: "Maria Santos",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651277217-dtdu6erj.jpg",
              date: "December 15, 2024"
            },
            {
              id: "blog2",
              category: "Technology",
              title: "Smart Stadiums: The Future of Football",
              excerpt: "How cutting-edge technology will transform the fan experience at 2026 World Cup venues across North America.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651290967-yrbikj43.jpg",
              imageAlt: "Modern football stadium with technology integration",
              authorName: "James Mitchell",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651278084-65rs3dqm.jpg",
              date: "December 12, 2024"
            },
            {
              id: "blog3",
              category: "Analysis",
              title: "2026 World Cup: Team Predictions and Analysis",
              excerpt: "Early analysis of potential contenders and how the expanded 48-team format will impact competition strategies.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651292086-ms0fw7mk.jpg",
              imageAlt: "Football team tactical analysis",
              authorName: "Alex Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651278999-36nxvt67.jpg",
              date: "December 10, 2024"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Get World Cup Updates"
          description="Subscribe to receive the latest news, match schedules, ticket information, and exclusive content about the 2026 FIFA World Cup."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive FIFA World Cup updates and can unsubscribe at any time."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651293223-yhzql0l5.jpg"
          imageAlt="2026 World Cup newsletter signup"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="2026 World Cup"
          copyrightText="© 2024 FIFA World Cup 2026. All rights reserved."
          columns={[
            {
              title: "Tournament",
              items: [
                { label: "Teams", href: "teams" },
                { label: "Schedule", href: "schedule" },
                { label: "Stadiums", href: "stadiums" },
                { label: "Host Cities", href: "cities" }
              ]
            },
            {
              title: "Tickets",
              items: [
                { label: "Buy Tickets", href: "https://tickets.fifa.com" },
                { label: "Pricing", href: "pricing" },
                { label: "VIP Packages", href: "vip" },
                { label: "Group Sales", href: "groups" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "News", href: "blog" },
                { label: "FAQ", href: "faq" },
                { label: "Travel Guide", href: "travel" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Official",
              items: [
                { label: "FIFA.com", href: "https://fifa.com" },
                { label: "Merchandise", href: "shop" },
                { label: "Partners", href: "partners" },
                { label: "Media Center", href: "media" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/fifaworldcup", ariaLabel: "Follow on Twitter" },
            { icon: Instagram, href: "https://instagram.com/fifaworldcup", ariaLabel: "Follow on Instagram" },
            { icon: Facebook, href: "https://facebook.com/fifaworldcup", ariaLabel: "Follow on Facebook" },
            { icon: Youtube, href: "https://youtube.com/fifa", ariaLabel: "Subscribe on YouTube" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}