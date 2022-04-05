import Image from "next/image";
function LogoMatab() {
  return (
    <div className="text-center lg:text-right">
      <Image src="/image/logo.png" width={200} height={151} />
    </div>
  );
}

export default LogoMatab;
