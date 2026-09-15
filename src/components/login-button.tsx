import { SiteButton } from "@/components/site-button";
import { navLogin } from "@/constants/landing";

type LoginButtonProps = {
  variant: "compact" | "block";
  onNavigate?: () => void;
};

export function LoginButton({ variant, onNavigate }: LoginButtonProps) {
  return (
    <SiteButton
      href={navLogin.href}
      variant="primary"
      size={variant === "block" ? "block" : "compact"}
      onClick={onNavigate}
    >
      {navLogin.label}
    </SiteButton>
  );
}
