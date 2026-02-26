import Image from "next/image";
import favicon from "../app/favicon.svg";

export function Logo() {
  return (
    <Image
      draggable={false}
      src={favicon}
      alt={`${CORP_NAME} logo`}
      width={32}
      height={32}
    />
  );
}
