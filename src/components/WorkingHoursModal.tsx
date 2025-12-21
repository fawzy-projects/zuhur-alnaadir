import { X, Clock } from "lucide-react";

interface WorkingHoursModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkingHoursModal = ({ isOpen, onClose }: WorkingHoursModalProps) => {
  if (!isOpen) return null;

  const days = [
    { day: "الأحد", time: "٩:٣٠ص–١٢:٠٠ص" },
    { day: "الاثنين", time: "٩:٣٠ص–١٢:٠٠ص" },
    { day: "الثلاثاء", time: "٩:٣٠ص–١٢:٠٠ص" },
    { day: "الأربعاء", time: "٩:٣٠ص–١٢:٠٠ص" },
    { day: "الخميس", time: "٩:٣٠ص–١٢:٠٠ص" },
    { day: "الجمعة", time: "١:٠٠م–١٢:٠٠ص" },
    { day: "السبت", time: "٩:٣٠ص–١٢:٠٠ص" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      {/* Overlay */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal */}
      <div className="relative w-full max-w-md md:max-w-xl mx-4 rounded-lg bg-card card-shadow border border-border overflow-hidden animate-fade-in">
        <div className="flex flex-col max-h-[min(640px,calc(100vh-4rem))]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-nursery-green text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-right">
                <h2 className="text-lg font-bold font-tajawal">مواعيد العمل</h2>
                <p className="text-xs opacity-90 font-tajawal">
                  مواعيد العمل واستقبال العملاء
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-muted/40">
            <p className="text-sm text-foreground font-tajawal">
              نعمل طوال أيام الأسبوع من{" "}
              <span className="font-semibold">8:00 صباحًا</span> حتى{" "}
              <span className="font-semibold">10:00 مساءً</span>.
            </p>

            <div className="space-y-2 text-sm font-tajawal">
              {days.map(({ day, time }) => (
                <div
                  key={day}
                  className="flex items-center justify-between rounded-xl bg-card px-4 py-2 shadow-sm border border-border/60"
                >
                  <span className="font-semibold text-foreground">{day}</span>
                  <span className="text-muted-foreground">{time}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed font-tajawal">
              قد تتغير المواعيد في المواسم أو الإجازات الرسمية. يُفضّل التواصل معنا عبر واتساب للتأكد من المواعيد.د في نفس اليوم.
            </p>
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-border bg-card">
            <button
              onClick={onClose}
              className="w-full py-3 px-4 bg-muted text-foreground text-sm font-medium hover:bg-muted/80 transition-colors font-tajawal rounded-lg"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHoursModal;
