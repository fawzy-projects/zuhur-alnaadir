import { useState } from "react";
import {
  MapPin,
  MessageCircle,
  Phone,
  Briefcase,
  Instagram,
  Facebook,
  Youtube,
  Ghost,
  Clock,
  Globe,
} from "lucide-react";
import LinkCard from "./LinkCard";
import ServicesList from "./ServicesList";
import WorkingHoursModal from "./WorkingHoursModal";

const CardsGrid = () => {
  const [showServices, setShowServices] = useState(false);
  const [showHours, setShowHours] = useState(false);

  const phoneNumber = "+201503737049";
  const phoneNumberForWa = "201503737049";

  const cards = [
    {
      icon: <MapPin className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-map",
      title: "الموقع على الخريطة",
      description: "5R2 Egypt Medical Center, التاسعة، مدينة نصر، محافظة القاهرة",
      buttonText: "اضغط للانتقال",
      href: "https://maps.app.goo.gl/raKyZSVEzLYShQFz7",
    },
    {
      icon: <Globe className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-website",
      title: "الموقع الإلكتروني",
      description: "تعرف على خدماتنا وتواصل معنا عبر الموقع الرسمي.",
      buttonText: "فتح الموقع",
      href: "https://bazadgroup.com/",
    },
    {
      icon: <Clock className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-hours",
      title: "مواعيد العمل",
      description: "مواعيدنا الرسمية — تواصل معنا للتأكيد حسب اليوم.",
      buttonText: "شاهد المواعيد",
      onClick: () => setShowHours(true),
    },
    {
      icon: <Phone className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-phone",
      title: "اتصال مباشر",
      description: "اتصل بنا الآن لمناقشة احتياجات شركتك وخططك.",
      buttonText: "اتصل الآن",
      href: `tel:${phoneNumber}`,
    },
    {
      icon: <MessageCircle className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-whatsapp",
      title: "تواصل واتساب",
      description: "للاستفسار أو حجز استشارة، راسلنا مباشرة عبر واتساب.",
      buttonText: "تواصل الآن",
      href: `https://wa.me/${phoneNumberForWa}?text=${encodeURIComponent(
        "السلام عليكم، حابب/ة أعرف تفاصيل خدمات BAZAD وحجز استشارة."
      )}`,
    },
    {
      icon: <Briefcase className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-services",
      title: "قائمة الخدمات",
      description: "استعرض خدماتنا الأساسية في تأسيس ونمو الأعمال.",
      buttonText: "عرض الخدمات",
      onClick: () => setShowServices(true),
    },

    // ✅ اترك كاردات السوشيال ميديا كما هي
    {
      icon: <Ghost className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-snapchat",
      title: "سناب شات",
      description: "تابع سناباتنا اليومية والعروض الخاصة.",
      buttonText: "افتح سناب",
      href: "https://www.snapchat.com/add/YOUR_SNAP_USERNAME",
    },
    {
      icon: <Instagram className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-instagram",
      title: "إنستجرام",
      description: "أحدث الصور والفيديوهات.",
      buttonText: "افتح إنستجرام",
      href: "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME",
    },
    {
      icon: <Facebook className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-facebook",
      title: "فيسبوك",
      description: "تابع أخبارنا وتفاعل معنا على فيسبوك.",
      buttonText: "افتح فيسبوك",
      href: "https://www.facebook.com/YOUR_FACEBOOK_PAGE",
    },
    {
      icon: <Youtube className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-youtube",
      title: "يوتيوب",
      description: "شاهد الفيديوهات واللقاءات.",
      buttonText: "افتح يوتيوب",
      href: "https://www.youtube.com/@YOUR_CHANNEL",
    },
  ];

  return (
    <>
      <section className="pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <LinkCard key={card.title} {...card} delay={100 + index * 100} />
            ))}
          </div>
        </div>
      </section>

      <ServicesList isOpen={showServices} onClose={() => setShowServices(false)} />
      <WorkingHoursModal isOpen={showHours} onClose={() => setShowHours(false)} />
    </>
  );
};

export default CardsGrid;
