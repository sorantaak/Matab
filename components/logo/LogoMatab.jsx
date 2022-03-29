import Image from "next/image";
function LogoMatab() {
  return (
    <div className="mt-4 hidden lg:flex">
      <Image src="/image/logo.png" width={200} height={151} />
    </div>
  );
}

export default LogoMatab;
