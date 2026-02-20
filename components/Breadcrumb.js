import Link from "next/link";

export default function Breadcrumb({ title, pages = [] }) {
  return (
    <section
      className="breadcrumb-section set-bg"
      style={{ backgroundImage: `url(/img/breadcrumb.jpg)` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
              <h2>{title}</h2>
              <div className="breadcrumb__option">
                {pages.map((page, index) =>
                  page.href ? (
                    <Link href={page.href} key={index}>
                      {page.label}
                    </Link>
                  ) : (
                    <span key={index}>{page.label}</span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
