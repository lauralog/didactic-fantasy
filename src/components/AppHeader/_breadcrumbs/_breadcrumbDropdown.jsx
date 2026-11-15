// import './../appHeader.scss';

const BreadcrumbDropdown = ({ breadcrumb, pages, className = '', ...props }) => {
  return (
    <ul className={`breadcrumb__dropdown ${className}`} {...props}>
      {pages.map((page) => (
        <li className="pageItem" key={page}>
          <span className="pageItem__label">{page}</span>
        </li>
      ))}
    </ul>
  );
};

export default BreadcrumbDropdown;
