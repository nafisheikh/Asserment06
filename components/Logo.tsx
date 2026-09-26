import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="brand" aria-label="FitLog home">
      <Image
        src="/logo.png"
        alt="FitLog logo"
        width={28}
        height={28}
        className="brand-logo"
        priority
      />
      <span>FITLOG</span>
    </Link>
  );
}
