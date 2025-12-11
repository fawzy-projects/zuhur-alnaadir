import { X, Leaf } from "lucide-react";

interface PlantsListProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Plant {
  name: string;
  type: string;
  image: string;
}

const plants: Plant[] = [
  {
    name: "ياسمين",
    type: "زهور عطرية",
    image:
      "https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "ورد جوري",
    type: "زهور",
    image:
      "https://images.pexels.com/photos/712876/pexels-photo-712876.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "نخيل واشنطونيا",
    type: "أشجار",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.sS0eB5ueAHwavE-AUN34sgHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "فيكس",
    type: "نباتات ظل",
    image:
      "https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "جهنمية",
    type: "متسلقات",
    image:
      "https://images.pexels.com/photos/931128/pexels-photo-931128.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "لافندر",
    type: "عطريات",
    image:
      "https://cdn.alweb.com/thumbs/woroodoazhar/article/fit710x532/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D9%88%D8%B1%D9%88%D8%AF-%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%86%D8%AF%D8%B1.jpg",
  },
  {
    name: "نعناع",
    type: "عطريات",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.0-poXb_u6ubDMZLiXtZMuwHaFM?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "ريحان",
    type: "عطريات",
    image:
      "https://images.pexels.com/photos/2187445/pexels-photo-2187445.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

const PlantsList = ({ isOpen, onClose }: PlantsListProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      {/* Overlay */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-md md:max-w-xl mx-4 rounded-2xl bg-card shadow-lg border border-border overflow-hidden animate-fade-in">
        <div className="flex flex-col max-h-[min(640px,calc(100vh-4rem))]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-nursery-green text-primary-foreground">
            <div className="flex items-center gap-3 flex-row-reverse">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="text-right">
                <h2 className="text-lg font-bold font-tajawal">قائمة النباتات</h2>
                <p className="text-xs opacity-90 font-tajawal">
                  لمحة عن أشهر النباتات المتوفرة لدينا
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

          {/* Plants List */}
          <div className="px-4 py-4 space-y-3 overflow-y-auto bg-muted/30">
            {plants.map((plant) => (
              <div
                key={plant.name}
                className="flex flex-row-reverse items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-sm border border-border/60"
              >
                {/* النص (الاسم + النوع تحته) */}
                <div className="flex flex-col items-end text-right flex-1">
                  <span className="font-tajawal font-semibold text-foreground">
                    {plant.name}
                  </span>
                  <span className="font-tajawal text-xs text-muted-foreground mt-0.5">
                    {plant.type}
                  </span>
                </div>

                {/* صورة النبات */}
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden bg-nursery-green/5 border border-nursery-green/40 flex-shrink-0">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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

export default PlantsList;
