interface Props {
  children: React.ReactNode;
}
const Button = ({ children }: Props) => {
  return (
    <button
      className="py-3 px-6 h-full bg-action-dark/75 hover:bg-white/40 hover:scale-105 transition-all duration-300 rounded-md grid place-items-center">
      {children}
    </button>
  );
};

export default Button;
