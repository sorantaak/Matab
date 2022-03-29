import Image from "next/image";
function LogoMatab() {
  return (
    <div className="mt-4 hidden sm:flex">
      <Image src="/image/logo.png" width={350} height={264} />
    </div>
  );
}

export default LogoMatab;
