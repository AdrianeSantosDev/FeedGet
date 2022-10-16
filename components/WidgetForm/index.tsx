import { CloseButton } from "../CloseButton";
import ideiaImageUrl from "../../src/assets/idea.svg";
import bugImageUrl from "../../src/assets/bug.svg";
import thoughtImageUrl from "../../src/assets/thought.svg";
import { useState } from "react";
import { ArrowButton } from "../ArrowButton";
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    placeholder:
      "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...",
    image: { source: bugImageUrl, alt: "Imagem de inseto" },
  },
  IDEIA: {
    title: "Idea",
    placeholder:
      "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!",
    image: { source: ideiaImageUrl, alt: "Imagem de uma lâmpada" },
  },
  OTHER: {
    title: "Outro",
    placeholder: "Queremos te ouvir. O que você gostaria de nos dizer? ",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          href="https://rocketseat.com.br"
          className="underline underline-offset-2"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
