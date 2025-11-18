import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbTitle: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbTitle }) => {
  return (
    <section className="page-title centred">
      <div
        className="bg-layer"
        style={{ backgroundImage: "url(/assets/images/background/page-title.jpg)" }}
      ></div>

      <div className="auto-container">
        <div className="content-box">
          <ul className="bread-crumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{breadcrumbTitle}</li>
          </ul>
          <h1>{breadcrumbTitle}</h1>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
