import { useRouter } from "next/navigation";
import { useEffect } from "react";

import useMediaQuery from "./useMediaQuery";

const useRestrictedRouting = (minWidthQuery: string) => {
  const router = useRouter();
  const isMinWidth = useMediaQuery(minWidthQuery);

  useEffect(() => {
    if (!isMinWidth) {
      alert("PC 화면 이상에서 접근해주세요");
      router.back();
    }
  }, [isMinWidth, router]);
};

export default useRestrictedRouting;
