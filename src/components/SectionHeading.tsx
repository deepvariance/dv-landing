import { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  as?: keyof JSX.IntrinsicElements;
  descriptionNode?: ReactNode;
};

export default function SectionHeading({
  title,
  highlight,
  description,
  descriptionNode,
  align = "left",
  className = "",
  headingClassName = "",
  descriptionClassName = "",
  as = "h2",
}: SectionHeadingProps) {
  const HeadingTag = as;
  const alignmentClasses = align === "center" ? "text-center mx-auto" : "text-left";
  const wrapperClasses = [
    "space-y-4",
    alignmentClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const headingClasses = [
    "text-4xl md:text-5xl text-white",
    headingClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const baseDescriptionClasses = [
    "text-xl text-accent-300 leading-relaxed",
    align === "center" ? "mx-auto" : "",
    descriptionClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const renderDescription = () => {
    if (descriptionNode) {
      return descriptionNode;
    }

    if (!description) {
      return null;
    }

    return <p className={baseDescriptionClasses}>{description}</p>;
  };

  return (
    <div className={wrapperClasses}>
      <HeadingTag className={headingClasses}>
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-gradient">{highlight}</span>
          </>
        ) : null}
      </HeadingTag>
      {renderDescription()}
    </div>
  );
}
