// src/components/PrimaryButton.jsx
const PrimaryButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="
      relative z-10 overflow-hidden rounded-[15px] border-none 
      bg-[#e8e8e8] px-[25px] py-[15px] 
      text-[17px] font-black text-[#212121] 
      shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] 
      transition-all duration-250
      
      before:absolute before:left-0 before:top-0 before:z-[-1] 
      before:h-full before:w-0 before:rounded-[15px] 
      before:bg-[#212121] 
      before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] 
      before:transition-all before:duration-250
      
      hover:text-[#e8e8e8] 
      hover:before:w-full
    "
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
