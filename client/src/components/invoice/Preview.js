// import pdfjs from "pdfjs-dist/build/pdf";
// import React, { useState } from "react";

// function Preview({ url }) {
//   const [images, setImages] = useState([]);

//   const convertPdfToImages = async () => {
//     const loadingTask = pdfjs.getDocument(url);
//     const pdf = await loadingTask.promise;

//     const imagePromises = Array.from({ length: pdf.numPages }, (_, index) => {
//       return new Promise(async (resolve) => {
//         const page = await pdf.getPage(index + 1);
//         const canvas = document.createElement("canvas");
//         const viewport = page.getViewport({ scale: 1.5 });
//         canvas.width = viewport.width;
//         canvas.height = viewport.height;
//         const context = canvas.getContext("2d");
//         const renderContext = {
//           canvasContext: context,
//           viewport: viewport,
//         };

//         const renderTask = page.render(renderContext);
//         renderTask.promise.then(() => {
//           canvas.toBlob((blob) => {
//             const imgUrl = URL.createObjectURL(blob);
//             resolve(imgUrl);
//           });
//         });
//       });
//     });

//     Promise.all(imagePromises).then((imageUrls) => {
//       setImages(imageUrls);
//     });
//   };

//   return (
//     <div
//       className="d-flex align-items-center justify-content-center"
//       onClick={convertPdfToImages()}
//     >
//       <img src={images} />
//     </div>
//   );
// }

// export default Preview;
