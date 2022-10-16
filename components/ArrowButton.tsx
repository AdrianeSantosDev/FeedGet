import { Popover } from "@headlessui/react";
import { ArrowArcLeft, ArrowLeft, X } from "phosphor-react";

export function ArrowButton() {
  return (
    <button
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Fechar form de feedback"
      type="button"
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
}
