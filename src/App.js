import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";




export default function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <div
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <Viewer
          fileUrl={`${process.env.PUBLIC_URL}/bvt_pilars.pdf`}
        />
      </div>
    </Worker>
  );
}
