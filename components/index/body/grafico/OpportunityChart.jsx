import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const OpportunityChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const container = svg.node().parentElement;
    
    // Limpeza inicial
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 20, bottom: 40, left: 30 };
    const width = container.clientWidth - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const g = svg
      .attr("width", container.clientWidth)
      .attr("height", 300)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand().domain(data.map(d => d.ano)).range([0, width]).padding(0.3);
    const yScale = d3.scaleLinear().domain([0, d3.max(data, d => d.valor)]).range([height, 0]);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    g.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.ano))
      .attr("width", xScale.bandwidth())
      .attr("fill", "#4A90E2")
      .attr("rx", 4)
      .attr("y", height)
      .attr("height", 0)
      .transition()
      .duration(800)
      .delay((d, i) => i * 80)
      .attr("y", d => yScale(d.valor))
      .attr("height", d => height - yScale(d.valor));

  }, [data]); // Re-renderiza se os dados mudarem

  return <svg ref={svgRef} aria-label="Gráfico de Barras de Oportunidades" />;
};

export default OpportunityChart;