import { Table } from "antd";
import { Link } from "react-router-dom";

const Links = ({ links }) => {
  const columns = [
    {
      title: "Título",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      render: (text) => <Link to={text} target="_blank">{text}</Link>,
    },
  ];

  return (
    <div>
      {links ? (
        <Table dataSource={links} columns={columns}  />
      ) : (
        <>sem usuário</>
      )}
      <hr />
    </div>
  );
};

export default Links;