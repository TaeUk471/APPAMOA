export default function registMouseDownDrag(
  onDragChange: (deltaX: number, deltaY: number) => void,
  stopPropagation?: boolean
) {
  const handleMouseDown = (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
    if (stopPropagation) clickEvent.stopPropagation();

    const startX = clickEvent.screenX;
    const startY = clickEvent.screenY;

    // 드래그 중에 호출되는 핸들러
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.screenX - startX;
      const deltaY = moveEvent.screenY - startY;
      onDragChange(deltaX, deltaY);
    };

    // 드래그가 끝났을 때 호출되는 핸들러
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, { once: true });
  };

  return {
    onMouseDown: handleMouseDown,
  };
}
