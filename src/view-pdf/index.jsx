import { PDFViewer, pdf } from "@react-pdf/renderer";
import { MyDocument } from "../myDocument";
import { saveAs } from "file-saver"; // Importing file-saver for downloading the PDF
import { RiFolderDownloadFill } from "react-icons/ri";
import { GrFormPrevious } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";

export function ViewPdf() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};

  const handleDownload = async () => {
    const blob = await pdf(<MyDocument formData={formData} />).toBlob();
    saveAs(blob, "resume.pdf");
  };

  const handlePrevious = () => {
    navigate("/create-pdf", { state: { formData } });
  };

  return (
    <div style={styles.viewerContainer}>
      <PDFViewer style={styles.pdfViewer}>
        <MyDocument formData={formData} />
      </PDFViewer>
      <button style={styles.downloadButton} onClick={handleDownload}>
        <RiFolderDownloadFill style={styles.download} />
      </button>
      <button style={styles.previousButton} onClick={handlePrevious}>
        <GrFormPrevious style={styles.previous} /> Previous
      </button>
    </div>
  );
}

const styles = {
  viewerContainer: {
    width: "99vw", // Slightly reduced width
    height: "99vh", // Slightly reduced height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: "10px",
    position: "relative", // To position the button within this container
  },
  pdfViewer: {
    width: "100%",
    height: "100%",
    border: "none",
  },
  downloadButton: {
    position: "absolute",
    bottom: "5vh",
    right: "5vw",
    padding: "15px",
    backgroundColor: "#4A90E2", // Accent color matching your theme
    color: "#fff",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
  },
  download: {
    width: "30px",
    height: "30px",
  },
  previous: {
    width: "30px",
    height: "30px",
  },
  previousButton: {
    text: "30px",
    position: "absolute",
    bottom: "5vh",
    left: "5vw",
    padding: "5px",
    backgroundColor: "#f56551", // Accent color for previous button
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
    display: "flex",
  },
};
