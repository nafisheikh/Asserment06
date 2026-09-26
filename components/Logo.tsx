import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="brand" aria-label="FitLog home">
      <span className="brand-mark"><span /></span>
      <span>FITLOG</span>
    </Link>
  );
}
