interface ServicesItemProps {
  icon: string;
  text: string;
  href?: string;
}

export const ContactIconItem = ({ icon, text, href }: ServicesItemProps) => {
  return (
    <div>
      <a
        className={
          "flex items-center flex-row text-blue-950 xs:w-full sm:w-1/3"
        }
        href={href}
        target="_blank"
      >
        <div
          className={`flex justify-center
       items-center  rounded-full w-12 h-12 `}
        >
          <img src={icon} alt={"Icon"} className={`w-8`} />
        </div>

        <span className={"font-semibold pl-1 "}>{text}</span>
      </a>
    </div>
  );
};
