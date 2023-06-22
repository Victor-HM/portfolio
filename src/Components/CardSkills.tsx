interface CardSkillsProps {
  icon: string;
  text: string;
}

export function CardSkills({ icon, text }: CardSkillsProps) {
  return (
    <div className="w-full lg:w-96 bg-gray-100 py-4 px-5 flex items-center gap-2 rounded-md border-2 border-violet-700">
      <img src={icon} alt={`ícone do ${text}`} className="w-7" />
      <p className="">{text}</p>
    </div>
  );
}
