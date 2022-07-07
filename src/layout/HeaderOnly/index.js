import Header from "~/layout/Components/Header";

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}

export default HeaderOnly;
