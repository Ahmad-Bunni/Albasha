import type { SVGProps } from "react";

export function GooglePlay(props: SVGProps<SVGSVGElement>) {
  return (
    <li>
      <a
        aria-label="Instagram"
        target="_blank"
        href="https://play.google.com/store/apps/details?id=io.applova.clermont.pkgXA2CJK9088G11"
        className="text-rose-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-10"
          viewBox="0 0 256 283"
          {...props}
        >
          <path
            fill="#ea4335"
            d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"
          ></path>
          <path
            fill="#fbbc04"
            d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"
          ></path>
          <path
            fill="#4285f4"
            d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"
          ></path>
          <path
            fill="#34a853"
            d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"
          ></path>
        </svg>
      </a>
    </li>
  );
}
