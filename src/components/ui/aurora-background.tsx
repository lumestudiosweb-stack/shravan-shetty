import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

/**
 * Light-mode aurora — soft sky/mint/gold washes that drift slowly behind the
 * hero. Intentionally restrained — meant to read as ambient museum lighting
 * rather than a sci-fi background.
 */
export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-background text-foreground overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            `
            [--aurora:repeating-linear-gradient(115deg,hsl(184_55%_85%)_10%,hsl(195_70%_88%)_18%,hsl(180_40%_90%)_25%,hsl(36_70%_88%)_32%,hsl(184_55%_85%)_40%)]
            [background-image:var(--aurora)]
            [background-size:200%_180%]
            [background-position:50%_50%]
            filter blur-[32px]
            after:content-[""] after:absolute after:inset-0
            after:[background-image:var(--aurora)]
            after:[background-size:160%_140%]
            after:animate-aurora after:mix-blend-multiply after:opacity-70
            pointer-events-none
            absolute -inset-[10px] opacity-70 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_70%_30%,black_15%,transparent_70%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
};
