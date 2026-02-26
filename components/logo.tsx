import Image from "next/image";

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
