import { ToastContext } from "@/contexts/ToastContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useState } from "react";

export default function useDownloadFile() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { activeToast } = useContext(ToastContext);

  const downloadFile = (src: string, cb?: () => void) => {
    setIsLoading(true);
    try {
      const a = document.createElement("a");
      a.href = src;
      a.download = src.substring(src.lastIndexOf("/") + 1);
      document.body.appendChild(a);
      setTimeout(() => {
        a.click();
        setIsLoading(false);
        setIsDownload(true);
        activeToast("success", <><Icon icon="line-md:download-loop" />Download do currículo concluído!</>);
        setTimeout(() => {
          setIsDownload(false);
        }, 8000);
      }, 1000);

      cb ? cb() : undefined;
    } catch (error) {
      setError("Erro ao baixar o arquivo.");
      setIsLoading(false);
    }
  };

  return { downloadFile, isLoading, error, isDownload };
}
