// "use client";

// import React, { ReactNode, useState, useRef, useEffect } from "react";
// import { useDrag, useDrop, DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import ResizableBox, { ResizeHandler } from "react-resizable-box";

// import useExportPDFStore from "store/useExportPDFStore";
// import usePaginationStore from "store/usePaginationStore";

// interface DraggableComponentProps {
//   width: number;
//   height: number;
//   onResize: (event: ResizeHandler, data: { size: { width: number; height: number } }) => void;
//   underline: boolean;
//   lineSpacing: string;
//   letterSpacing: string;
// }

// interface DropContainerProps {
//   children: ReactNode;
// }

// const ItemType = {
//   BOX: "box",
// };

// const DraggableComponent = ({
//   width,
//   height,
//   onResize,
//   underline,
//   lineSpacing,
//   letterSpacing,
// }: DraggableComponentProps) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemType.BOX,
//     collect: monitor => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       style={{
//         width,
//         height,
//         opacity: isDragging ? 0.5 : 1,
//         cursor: "move",
//         border: "1px solid gray",
//         position: "relative",
//         padding: "10px",
//       }}>
//       <ResizableBox
//         width={width}
//         height={height}
//         onResize={onResize}
//         minConstraints={[50, 50]}
//         maxConstraints={[500, 500]}>
//         <textarea
//           defaultValue="DnD 컴포넌트"
//           style={{
//             width: "100%",
//             height: "100%",
//             textDecoration: underline ? "underline" : "none",
//             lineHeight: lineSpacing,
//             letterSpacing: letterSpacing,
//           }}
//         />
//       </ResizableBox>
//     </div>
//   );
// };

// const DropContainer = ({ children }: DropContainerProps) => {
//   const dropRef = useRef<HTMLDivElement | null>(null);
//   const [, drop] = useDrop(() => ({
//     accept: ItemType.BOX,
//   }));

//   drop(dropRef);

//   return (
//     <div
//       ref={dropRef}
//       id="a4-container-1"
//       className="w-[210mm] h-[297mm] m-auto bg-white relative border-2 border-black overflow-hidden p-[10px]">
//       {children}
//     </div>
//   );
// };

// export default function EditPage() {
//   const [width, setWidth] = useState<number>(200);
//   const [height, setHeight] = useState<number>(100);
//   const [underline, setUnderline] = useState<boolean>(false);
//   const [lineSpacing, setLineSpacing] = useState<string>("1.5");
//   const [letterSpacing, setLetterSpacing] = useState<string>("1px");
//   const currentPage = usePaginationStore(state => state.currentPage);
//   const ult = usePaginationStore.getState().currentPage;

//   const handleResize = (event: React.SyntheticEvent, data: { size: { width: number; height: number } }) => {
//     setWidth(data.size.width);
//     setHeight(data.size.height);
//   };

//   useEffect(() => {
//     console.log("currentPage object:", ult);
//   }, [currentPage]);

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="flex bg-purple-100">
//         <div className="flex-1">
//           <DropContainer>
//             <DraggableComponent
//               width={width}
//               height={height}
//               onResize={handleResize}
//               underline={underline}
//               lineSpacing={lineSpacing}
//               letterSpacing={letterSpacing}
//             />
//           </DropContainer>
//         </div>
//         <div className="w-1/4 p-4">
//           <h3>컨트롤 패널</h3>
//           <div className="mb-4">
//             <label>
//               밑줄
//               <input
//                 type="checkbox"
//                 checked={underline}
//                 onChange={e => setUnderline(e.target.checked)}
//                 className="ml-2"
//               />
//             </label>
//           </div>
//           <div className="mb-4">
//             <label>
//               줄 간격
//               <input
//                 type="number"
//                 value={lineSpacing}
//                 onChange={e => setLineSpacing(e.target.value)}
//                 className="ml-2 border px-2 py-1"
//               />
//             </label>
//           </div>
//           <div className="mb-4">
//             <label>
//               글자 간격
//               <input
//                 type="number"
//                 value={letterSpacing.replace("px", "")}
//                 onChange={e => setLetterSpacing(e.target.value + "px")}
//                 className="ml-2 border px-2 py-1"
//               />
//             </label>
//           </div>
//         </div>
//       </div>
//     </DndProvider>
//   );
// }
