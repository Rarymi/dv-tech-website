interface ServicesItemProps {
  icon: string;
  text: string;
  color: string;
}

export const ServicesIconItem = ({ icon, text, color }: ServicesItemProps) => {
  return (
    <div className={"flex items-center"}>
      <div
        className={`flex justify-center
       items-center ${color} rounded-full w-12 h-12 `}
      >
        <img src={icon} alt={"Icon"} className={`w-8`} />
      </div>

      <span className={"font-semibold pl-1 "}>{text}</span>
    </div>
  );
};
