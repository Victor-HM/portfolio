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
  download?: string;
}

export function CardCourses({
  img,
  subtitle,
  text,
  complete,
  position = "LEFT",
  certificate,
  download,
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
            <div className="bg-neutral-300 p-3 rounded-full">
              <Student size={24} className="text-violet-600" weight="fill" />
            </div>
            <img src={img} alt="" className="h-10" />
          </S.PointCard>
          <p className="text-sm text-gray-700">{subtitle}</p>

          <div>
            <p className="text-black">{text}</p>
          </div>
          <div className="flex items-center gap-1 text-black">
            <CalendarBlank size={20} weight="light" />
            <p className="text-sm ">{complete ? complete : "Em progresso"}</p>
          </div>

          <a
            href={`document/${certificate}`}
            download={download}
            className="w-fit"
          >
            <Button
              placeholder={certificate ? "Emitir certificado" : "Em progresso"}
              typeButton={certificate ? "SECONDARY" : "DISABLE"}
              disabled={certificate ? false : true}
            />
          </a>
        </div>
      </S.CardList>
    </S.CardCourses>
  );
}
