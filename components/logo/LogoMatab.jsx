import Image from "next/image";
function LogoMatab() {
  return (
    <div className="mt-16 text-center lg:text-right">
      <Image src="/image/logo.png" width={200} height={151} />
    </div>
  );
}

export default LogoMatab;
