export default function Button({
  lightshadow,
  darkshadow,
  whitebg,
  coloredbg,
  title,
}) {
  return (
    <div
      className={`
        grid place-content-center w-240 h-70 rounded-full cursor-pointer
        ${lightshadow && "shadow-lightbutton"}
        ${darkshadow && "shadow-darkbutton"}
        ${whitebg && "bg-secondary-100"}
        ${coloredbg && "bg-primary"}
      `}
    >
      <p
        className={`font-semibold text-xl  ${whitebg && "text-primary"} ${
          coloredbg && "text-white"
        }`}
      >
        {title}
      </p>
    </div>
  );
}
