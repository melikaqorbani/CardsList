import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '../cards/Crad';
import "./vendorslist.scss";

const VendorsList = () => {
  const [loading, setLoading] = useState(true);
  const [vendors, setVendors] = useState([]);
  const [page, setPage] = useState(0);
  const page_size = 10;
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://snappfood.ir/mobile/v3/restaurant/vendors-list",
        {
          params: {
            lat: 35.754,
            long: 51.328,
            page,
            page_size,
          },
        }
      );
      setVendors((prevVendors) => [...prevVendors, ...response.data.data.finalResult]);
      setLoading(false);
      setIsFetching(false);
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= pageHeight && !loading && !isFetching) {
        setIsFetching(true);
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, isFetching]);

  if (loading && page === 0) {
    return (
      <div className="vendors-list">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="vendors-list">
      <h2>Vendors List</h2>
      <div className="cards-container">
        {vendors.map((vendor) => (
          <Card
            image={vendor.data.coverPath}
            logo={vendor.data.defLogo}
           rate={vendor.data.rate}
            title={vendor.data.title}
            description={vendor.data.description}
          />
        ))}
      </div>
      {isFetching}
    </div>
  );
};

export default VendorsList;