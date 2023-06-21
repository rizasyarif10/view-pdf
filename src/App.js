import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function App() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({sidebarTabs: (defaultTabs) => []});
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.js">
      <div
        className="bvt_wrapper"
      >
        <Viewer
          fileUrl={`${process.env.PUBLIC_URL}/bvt_pilars.pdf`}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
}
