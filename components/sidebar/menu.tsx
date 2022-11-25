interface Props {
  Icon: any;
  label: string;
}

const MenuIcon = ({ Icon, label }: Props) => {
  return (
    <div className="pl-10 py-6 w-full relative flex items-center opacity-50 hover:opacity-100 hover:scale-110 hover:font-bold transition-all duration-150">
      <Icon className="w-6 h-6 text-white" />
      <span className="absolute left-20 bottom-4 hidden group-hover:block group-hover:animate-fade transition duration-100 text-white z-50 text-lg whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default MenuIcon;
