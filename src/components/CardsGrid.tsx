import { useState } from "react";
import { MapPin, MessageCircle, Phone, Leaf, Instagram, Facebook, Youtube, Mail, Ghost, Clock } from "lucide-react";
import LinkCard from "./LinkCard";
import PlantsList from "./PlantsList";
import WorkingHoursModal from "./WorkingHoursModal";

const CardsGrid = () => {
  const [showPlants, setShowPlants] = useState(false);
  const [showHours, setShowHours] = useState(false);

  const cards = [
    {
      icon: <MapPin className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-map",
      title: "الموقع على الخريطة",
      description: "موقعنا في الطائف – خط الجنوب – حي أم السباع.",
      buttonText: "اضغط للانتقال",
      href: "https://maps.app.goo.gl/kcqobTEdhHfscS7c6",
    },
    {
      icon: <Clock className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-hours",
      title: "مواعيد العمل",
      description: "نعمل طوال أيام الأسبوع من 8:00 صباحًا حتى 10:00 مساءً.",
      buttonText: "شاهد المواعيد",
      onClick: () => setShowHours(true),
    },
    {
      icon: <Phone className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-phone",
      title: "اتصال مباشر",
      description: "نخدمكم يوميًا ونوفر أفضل الشتلات والنباتات.",
      buttonText: "اتصل الآن",
      href: "tel:0546841412",
    },
    {
      icon: <MessageCircle className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-whatsapp",
      title: "تواصل واتساب",
      description: "للاستفسار أو الطلب، راسلنا مباشرة عبر واتساب.",
      buttonText: "تواصل الآن",
      href: "https://wa.me/966546841412?text=السلام%20عليكم،%20أود%20الاستفسار%20عن%20النباتات%20المتوفرة.",
    },
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
      description: "أحدث الصور والفيديوهات من المشتل.",
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
      description: "شاهد الفيديوهات والجولات في المشتل.",
      buttonText: "افتح يوتيوب",
      href: "https://www.youtube.com/@YOUR_CHANNEL",
    },
    {
      icon: <Mail className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-email",
      title: "البريد الإلكتروني",
      description: "راسلنا لأي استفسار أو عروض خاصة.",
      buttonText: "إرسال بريد",
      href: "mailto:yourmail@example.com",
    },
    {
      icon: <Leaf className="w-8 h-8" strokeWidth={1.6} />,
      iconBgColor: "bg-card-icon-plants",
      title: "قائمة النباتات",
      description: "استعرض أشهر النباتات المتوفرة لدينا.",
      buttonText: "عرض القائمة",
      onClick: () => setShowPlants(true),
    },
  ];

  return (
    <>
      <section className="pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <LinkCard
                key={card.title}
                {...card}
                delay={100 + index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <PlantsList isOpen={showPlants} onClose={() => setShowPlants(false)} />
      <WorkingHoursModal isOpen={showHours} onClose={() => setShowHours(false)} />
    </>
  );
};

export default CardsGrid;
