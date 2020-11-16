import React from 'react';
import PDFViewer from '../PDFViewer/PDFViewer';

import resumeFile from '../../resources/documents/JakeSage.pdf';

const resume = (props) => (
    <PDFViewer file={ resumeFile }/>
);

export default resume;