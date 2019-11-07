import React, { useEffect, useCallback } from 'react';
import tableau from 'tableau-api';

const Tableau = () => {
  let vizUrl;
  let vizContainer;

  const initViz = useCallback(() => {
    vizUrl =
      'https://public.tableau.com/views/ParkCrimeNumberRanking/Dashboard1?:increment_view_count=no&:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link';
    let Container = vizContainer;
    let viz = new window.tableau.Viz(Container, vizUrl);
  }, []);

  useEffect(() => {
    initViz();
  }, [initViz]);

  return (
    <div
      className="tableau"
      style={{ overflow: 'hidden' }}
      ref={div => {
        vizContainer = div;
      }}
    ></div>
  );
};

export default Tableau;
