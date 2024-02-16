import ExperienceItem from "./ExperienceItem"
import { EXPERIENCIE } from "@/app/utils/utils"

export default function Experience() {
  return (
    <ol className="relative mt-8">
      {
        EXPERIENCIE.map((experiencie) => (
          <li key={experiencie.description}>
            <ExperienceItem {...experiencie} />
          </li>
        ))
      }
    </ol>
  )
}