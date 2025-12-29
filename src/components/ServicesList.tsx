import { X, Briefcase, CheckCircle2 } from "lucide-react";

interface ServicesListProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Service {
  title: string;
  subtitle: string;
}

const services: Service[] = [
  { title: "تأسيس الشركات", subtitle: "Company Formation" },
  { title: "التسويق", subtitle: "Marketing" },
  { title: "الحوكمة", subtitle: "Governance" },
  { title: "تسجيل العلامات التجارية", subtitle: "Trademark Registration" },
  { title: "الترجمة والتدقيق اللغوي", subtitle: "Translation & Proofreading" },
  { title: "تخطيط البيزنس", subtitle: "Business Planning" },
  { title: "استشارات قانونية", subtitle: "Legal Consultation" },
  { title: "حلول برمجيات الذكاء الاصطناعي", subtitle: "AI Software Solutions" },
];

const ServicesList = ({ isOpen, onClose }: ServicesListProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" dir="rtl">
      {/* Overlay */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-md md:max-w-xl mx-4 rounded-2xl bg-card shadow-lg border border-border overflow-hidden animate-fade-in">
        <div className="flex flex-col max-h-[min(680px,calc(100vh-4rem))]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-nursery-green text-primary-foreground">
            <div className="flex items-center gap-3 flex-row-reverse">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-right">
                <h2 className="text-lg font-bold font-tajawal">قائمة الخدمات</h2>
                <p className="text-xs opacity-90 font-tajawal">
                  BAZAD — حلول أعمال واستشارات شاملة
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Services List */}
          <div className="px-4 py-4 space-y-3 overflow-y-auto bg-muted/30">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-row-reverse items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-sm border border-border/60"
              >
                <div className="flex flex-col items-end text-right flex-1">
                  <span className="font-tajawal font-semibold text-foreground">
                    {service.title}
                  </span>
                  <span className="font-tajawal text-xs text-muted-foreground mt-0.5">
                    {service.subtitle}
                  </span>
                </div>

                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden bg-nursery-green/10 border border-nursery-green/40 flex-shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-nursery-green" />
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-border bg-card">
            <button
              onClick={onClose}
              className="w-full py-3 px-4 bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors font-tajawal rounded-lg"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
