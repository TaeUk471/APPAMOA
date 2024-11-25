import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid bg-black opacity-90 w-full h-[100px] text-white [grid-template-areas:'copyright_githubInfo''sns_forWhat'] md:[grid-template-areas:'copyright_sns_githubInfo''footer_footer_forWhat']">
      <div className="p-2 font-roboto text-lg" style={{ gridArea: "copyright" }}>
        Copyright APPAMOA @2024
      </div>

      <div className="flex px-2 py-3 justify-start gap-6 md:pb-14 md:justify-center" style={{ gridArea: "sns" }}>
        <Link href={"https://www.facebook.com"}>
          {/* <Image width={22} height={22} src={"/icons/facebook.png"} alt="페이스북" /> */}
          <i className="fab fa-facebook text-[22px] mix-blend-multiple" />
        </Link>
        <Link href={"https://www.instagram.com/"}>
          <i className="fab fa-instagram text-[22px] mix-blend-multiple" />
        </Link>
        <Link href={"https://www.twitter.com/"}>
          <i className="fab fa-twitter text-[22px] mix-blend-multiple" />
        </Link>
      </div>

      <div className="pt-2 pb-14 gap-4 flex justify-end mr-4" style={{ gridArea: "githubInfo" }}>
        <p className="font-roboto mt-1">How we work?</p>
        <Link href={"https://github.com/TaeUk471/APPAMOA.git"}>
          <Image width={22} height={22} src={"/icons/github.png"} alt="깃헙" />
        </Link>
      </div>
      <div className="p-4 flex justify-end items-end" style={{ gridArea: "forWhat" }}>
        APPAMOA
      </div>
    </div>
  );
};

export default Footer;
