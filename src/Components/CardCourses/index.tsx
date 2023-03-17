import { CalendarBlank, Student } from "phosphor-react";
import { Button } from "../Button";
import * as S from "./card.style";

interface CardCoursesProps {
  img: string;
  subtitle: string;
  text: string;
  complete?: string | "Em progresso";
  position?: "LEFT" | "RIGHT";
  certificate?: string;
}

export function CardCourses({
  img,
  subtitle,
  text,
  complete,
  position = "LEFT",
  certificate,
}: CardCoursesProps) {
  return (
    <S.CardCourses className="w-full relative  before:bg-[#474747] before:rounded-md before:absolute before:w-[2px] before:h-full">
      <S.CardList
        position={position}
        className="w-full flex flex-col gap-10 px-8 py-4 sm:w-1/2"
      >
        <div className="flex flex-col gap-3">
          {/* before:absolute before:right-1/2 before:bg-violet-600 before:shadow-purple before:w-3 before:h-3 */}
          <S.PointCard
            position={position}
            className="flex items-center gap-3 after:w-3 after:h-3 after:absolute after:shadow-purple after:bg-violet-700 after:rounded-full"
          >
            <div className="bg-neutral-900 p-3 rounded-full">
              <Student size={24} className="text-violet-600" weight="fill" />
            </div>
            <img src={img} alt="" className="h-8" />
          </S.PointCard>
          <p className="text-sm text-gray-400">{subtitle}</p>

          <div>
            <p>{text}</p>
          </div>
          <div className="flex items-center gap-1">
            <CalendarBlank size={20} weight="fill" />
            <p className="text-sm">{complete ? complete : "Em progresso"}</p>
          </div>

          <a href={`document/${certificate}`} download="Certificado Rocketseat">
            <Button
              placeholder={complete ? "Emitir certificado" : "Em progresso"}
              typeButton={complete ? "SECONDARY" : "DISABLE"}
              disabled={complete ? false : true}
            />
          </a>
        </div>
      </S.CardList>
    </S.CardCourses>
  );
}
