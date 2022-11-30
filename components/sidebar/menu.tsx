interface Props {
  Icon: any;
  label: string;
}

const MenuIcon = ({ Icon, label }: Props) => {
  return (
    <div className="pl-8 md:pl-10 py-6 w-full relative flex items-center opacity-50 hover:opacity-100 hover:scale-110 hover:font-bold transition-all duration-150">
      <Icon className="w-6 h-6 text-white" />
      <span className="absolute left-20 bottom-5 hidden group-hover:block group-hover:animate-fade transition duration-500 ease-out text-white z-50 text-lg whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default MenuIcon;
