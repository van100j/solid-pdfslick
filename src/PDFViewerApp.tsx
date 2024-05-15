import { Component } from "solid-js";
import { usePDFSlick } from "@pdfslick/solid";

type PDFViewerAppProps = {
  pdfFilePath: string;
};

const PDFViewerApp: Component<PDFViewerAppProps> = ({ pdfFilePath }) => {
  const {
    viewerRef,
    pdfSlickStore: store,
    PDFSlickViewer,
  } = usePDFSlick(pdfFilePath);

  return (
    <div class="absolute inset-0 bg-slate-200/70 flex flex-col pdfSlick">
      <div class="flex-1 relative h-full">
        <PDFSlickViewer {...{ store, viewerRef }} />
      </div>
    </div>
  );
};

export default PDFViewerApp;
