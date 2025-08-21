type Props = {
  color?: string;
};

export const Loader = ({ color }: Props) => {
  return (
    <div aria-hidden="true">
      <svg
        className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="31.416"
          strokeDashoffset="31.416"
          opacity="0.25"
        />
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={color || "currentColor"}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="31.416"
          strokeDashoffset="10"
        />
      </svg>
    </div>
  );
};