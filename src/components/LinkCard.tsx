import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LinkCardProps {
  icon: ReactNode;
  iconBgColor: string;
  title: string;
  description: string;
  buttonText: string;
  href?: string;
  onClick?: () => void;
  delay?: number;
}

const LinkCard = ({
  icon,
  iconBgColor,
  title,
  description,
  buttonText,
  href,
  onClick,
  delay = 0,
}: LinkCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <div
      className={cn(
        "group relative rounded-2xl bg-card/95 border border-border/70 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden",
        "before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:bg-gradient-to-l before:from-nursery-green before:via-nursery-leaf before:to-nursery-green before:opacity-0 group-hover:opacity-100"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-5 flex items-center gap-4">
        <div
          className={cn(
            "flex items-center justify-center rounded-full w-16 h-16 shadow-sm text-primary-foreground",
            iconBgColor
          )}
        >
          {/* icon itself should be smaller so it doesn't touch the circle edges */}
          <div className="flex items-center justify-center w-9 h-9 text-primary-foreground">
            {icon}
          </div>
        </div>
        <div className="flex-1 text-right">
          <h3 className="text-lg font-bold text-foreground mb-2 font-tajawal">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-tajawal">
            {description}
          </p>
          <button
            type="button"
            onClick={handleClick}
            className="w-full py-3 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-medium font-tajawal shadow-sm hover:bg-primary/90 hover:shadow-md transition-colors duration-200"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
