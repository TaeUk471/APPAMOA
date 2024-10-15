// "use client";

// import html2pdf from "html2pdf.js";
// import React, { ReactNode, useState } from "react";
// import { useDrag, useDrop, DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import ResizableBox from "react-resizable-box";

// const ItemType = {
//   BOX: "box",
// };

// const DraggableComponent = ({ width, height, onResize, underline, lineSpacing, letterSpacing }) => {
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
//       <ResizableBox width={width} height={height} onResize={onResize}>
//         <textarea
//           defaultValue="기본 텍스트"
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

// const DropContainer = ({ children }: { children: ReactNode }) => {
//   const [, drop] = useDrop(() => ({
//     accept: ItemType.BOX,
//   }));

//   return (
//     <div
//       ref={drop}
//       id="a4-container"
//       style={{
//         width: "210mm",
//         height: "297mm",
//         margin: "0 auto",
//         background: "white",
//         position: "relative",
//         border: "2px solid black",
//         overflow: "hidden",
//         padding: "10px",
//       }}>
//       {children}
//     </div>
//   );
// };

// export default function DragAndDropPage() {
//   const [width, setWidth] = useState(200);
//   const [height, setHeight] = useState(100);
//   const [underline, setUnderline] = useState(false);
//   const [lineSpacing, setLineSpacing] = useState("1.5");
//   const [letterSpacing, setLetterSpacing] = useState("1px");

//   const handleResize = (event, { size }) => {
//     setWidth(size.width);
//     setHeight(size.height);
//   };

//   const handleExportPDF = () => {
//     const element = document.getElementById("a4-container");
//     html2pdf().from(element).save();
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="flex">
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
//           <button onClick={handleExportPDF} className="mt-4 p-2 bg-blue-500 text-white">
//             PDF로 내보내기
//           </button>
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
//                 value={letterSpacing}
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

export default function EditPage() {
  return (
    <>
      <div>이거</div>
    </>
  );
}
