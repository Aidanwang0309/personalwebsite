import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = ({ src }) => {
  const [page, setPage] = useState({
    pageNum: 1,
    numPages: null
  });

  const previous = () => {
    setPage({ ...page, pageNum: page.pageNum - 1 });
  };

  const next = () => {
    setPage({ ...page, pageNum: page.pageNum + 1 });
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPage({ ...page, numPages: numPages });
  };

  return (
    <Container>
      <Title>Research </Title>
      <Document
        className="pdf"
        file={src}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={page.pageNum} />
        {page.pageNum > 1 && (
          <Button onClick={previous} className="previous"></Button>
        )}
        {page.pageNum < 4 && <Button onClick={next} className="next"></Button>}
        <p
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: '45%',
            zIndex: '9'
          }}
        >
          Page {page.pageNum} of {page.numPages}
        </p>
      </Document>
    </Container>
  );
};

const Container = styled.div`
  transform: translateY(30%);
  justify-items: center;
  width: 100vw;
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr 7fr;
  grid-template-areas:
    '. title .'
    '.  pdf  .';
  margin-bottom: 20%;
  .react-pdf__Page__canvas {
    margin: 0 auto;
  }
  .pdf {
    border: 1px solid grey;
    width: 100%;
    height: auto;
    grid-area: pdf;
    position: relative;
  }
  .previous {
    left: 10px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  .next {
    right: 10px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`;

const Title = styled.h2`
  grid-area: title;
  justify-self: start;
  font-size: 1.7rem;
`;

const Button = styled.span`
  top: 50%;
  position: absolute;
  text-decoration: none;
  display: inline-block;
  align-self: center;
  cursor: pointer;
  transition: all 0.2s;
  border: solid grey;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.6rem;
  &:hover {
    box-shadow: 5px 5px #efdc99;
  }
`;

export default PDFReader;
