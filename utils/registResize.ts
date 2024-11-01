interface ResizeConfig {
  x: number;
  y: number;
  w: number;
  h: number;
  boundaryRef: React.RefObject<HTMLElement>;
  setConfig: (newConfig: { x: number; y: number; w: number; h: number }) => void;
  direction: "nw" | "ne" | "sw" | "se" | "s";
}

const inrange = (v: number, min: number, max: number) => {
  if (v < min) return min;
  if (v > max) return max;
  return v;
};

const BOUNDARY_MARGIN = 12;
const MIN_W = 80;
const MIN_H = 80;

export default function registResizeDrag({ x, y, w, h, boundaryRef, setConfig, direction }: ResizeConfig) {
  return {
    onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      clickEvent.stopPropagation();
      const startX = clickEvent.screenX;
      const startY = clickEvent.screenY;

      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        if (!boundaryRef.current) return;

        const deltaX = moveEvent.screenX - startX;
        const deltaY = moveEvent.screenY - startY;
        const boundary = boundaryRef.current.getBoundingClientRect();

        let newX = x;
        let newY = y;
        let newW = w;
        let newH = h;

        switch (direction) {
          case "nw":
            newX = inrange(x + deltaX, BOUNDARY_MARGIN, x + w - MIN_W);
            newY = inrange(y + deltaY, BOUNDARY_MARGIN, y + h - MIN_H);
            newW = inrange(w - deltaX, MIN_W, x + w - BOUNDARY_MARGIN);
            newH = inrange(h - deltaY, MIN_H, y + h - BOUNDARY_MARGIN);
            break;
          case "ne":
            newY = inrange(y + deltaY, BOUNDARY_MARGIN, y + h - MIN_H);
            newW = inrange(w + deltaX, MIN_W, boundary.width - x - BOUNDARY_MARGIN);
            newH = inrange(h - deltaY, MIN_H, y + h - BOUNDARY_MARGIN);
            break;
          case "sw":
            newX = inrange(x + deltaX, BOUNDARY_MARGIN, x + w - MIN_W);
            newW = inrange(w - deltaX, MIN_W, x + w - BOUNDARY_MARGIN);
            newH = inrange(h + deltaY, MIN_H, boundary.height - y - BOUNDARY_MARGIN);
            break;
          case "se":
            newW = inrange(w + deltaX, MIN_W, boundary.width - x - BOUNDARY_MARGIN);
            newH = inrange(h + deltaY, MIN_H, boundary.height - y - BOUNDARY_MARGIN);
            break;
          case "s":
            newW = inrange(w, MIN_W, boundary.width - x - BOUNDARY_MARGIN);
            newH = inrange(h + deltaY, MIN_H, boundary.height - y - BOUNDARY_MARGIN);
            break;
        }

        setConfig({ x: newX, y: newY, w: newW, h: newH });
      };

      const mouseUpHandler = () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler, { once: true });
    },
  };
}
