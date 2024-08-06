interface IFeedbackItem {
  text: string;
}

export const FeedbackItem = ({ text }: IFeedbackItem) => {
  return (
    <div
      className={`bg-blue-950/80 w-64 h-40 rounded-md justify-between  p-2 flex flex-col `}
    >
      <span className={`text-gray-100  text-xs text-justify pt-6`}>
        "{text}"
      </span>
      <span className={`text-gray-100  text-xs text-end self-end`}>
        ⭐⭐⭐⭐⭐
      </span>
    </div>
  );
};
