import CheckIcon from "../../../assets/icons/check-icon.svg";

interface ServiceItemProps {
  text: string;
}

export const ServiceItem = ({ text }: ServiceItemProps) => {
  return (
    <div className={`flex py-2`}>
      <img src={CheckIcon} alt={"Check icon"} className={`w-6 h-6`} />
      <span className={`font-light`}>{text}</span>
    </div>
  );
};
