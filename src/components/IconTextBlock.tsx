import { ReactNode } from "react";

type IconTextBlockProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  iconWrapperClassName?: string;
  className?: string;
};

export default function IconTextBlock({
  icon,
  title,
  children,
  iconWrapperClassName = "",
  className = "",
}: IconTextBlockProps) {
  const containerClasses = ["flex items-start gap-6", className]
    .filter(Boolean)
    .join(" ");

  const iconClasses = [
    "w-16 h-16 glass rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300",
    "group hover:border-glow-light",
    iconWrapperClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      <div className={iconClasses}>{icon}</div>
      <div>
        <h4 className="text-xl text-white mb-2">{title}</h4>
        <div className="space-y-1">{children}</div>
      </div>
    </div>
  );
}
