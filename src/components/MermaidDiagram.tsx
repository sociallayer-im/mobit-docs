import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

const MermaidDiagram: React.FC<{ code: string }> = ({ code }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (containerRef.current) {
        try {
          const renderResult = await mermaid.render("mermaid-diagram", code);
          const svgCode = renderResult.svg; // Assuming the SVG code is in the 'svg' property
          containerRef.current.innerHTML = svgCode;
        } catch (error) {
          console.error("Error rendering Mermaid diagram:", error);
        }
      }
    };

    renderDiagram();
  }, [code]);

  return <div ref={containerRef} />;
};

export default MermaidDiagram;
