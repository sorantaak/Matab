import Image from "next/image";

function ImageFromUi(props) {
  return (
    <div className="w-full hidden md:block p-3 order-1 md:order-2 md:p-5 mt-10 text-center">
      <Image src={props.srcImage} width={300} height={226} />
    </div>
  );
}

export default ImageFromUi;
