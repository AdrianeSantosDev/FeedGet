import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "./../Loading";
import { Tooltip } from "flowbite-react";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenShotTook: (screenshot: string | null) => void;
}
export function ScreenshotButton({
  screenshot,
  onScreenShotTook,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  async function handleTakenScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenShotTook(base64image);
    setIsTakingScreenshot(false);
  }
  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenShotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 50,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <>
      <Tooltip content="Capturar tela" style="light" arrow={false}>
        <button
          type="button"
          onClick={handleTakenScreenshot}
          className="bg-zinc-800 rounded-md p-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 hover:bg-zinc-700 text-zinc-100"
        >
          {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
        </button>
      </Tooltip>
    </>
  );
}
