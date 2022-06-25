
import "antd/dist/antd.css";
import { Space, Table, Tag } from "antd";
import React, {  useEffect ,useState} from "react";
import { doGet, doPost } from "../../../utils/api/api";
import {Link} from "react-router-dom";
// 

function ManageOrder() {
  const [orders, setOrders] = useState([]);
  // callAPI
  const columns = [
    {
      title: "Ngày tạo",
      dataIndex: "ngaytao",
      key: "ngaytao",
      render: (text) => <a>{text}</a>
    },
    {
      title: "Số điện thoại",
      dataIndex: "sdt",
      key: "sdt"
    },
    {
      title: "Mã đơn hàng ",
      dataIndex: "madh",
      key: "madh"
    },
    {
      title: "Địa chỉ",
      dataIndex: "diachi",
      key: "diachi"
    },
    {
      title: "Tổng tiền",
      key: "tongtien",
      dataIndex: "tongtien",
      render: (_, { tongtien }) => (
        <>
          {tongtien.map((tongtien) => {
            let color = tongtien.length > 5 ? "red" : "blue";
  
           
  
            return (
              <Tag color={color} key={tongtien}>
                {tongtien.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )
    },
    {
      title: "Trạng thái đơn hàng",
      key: "trangthai",
      render: (_, record) => (
        <Space size="middle">
          <a style={{color:"green"}}>Đang giao</a>
        </Space>
        
      )
    }
  ];
  const data=orders.map((item,index)=>{
        return {
          key:index,
          ngaytao:item.dateCreated.slice(0,10),
          sdt:item.phoneNumber,
          diachi:item.address,
          madh:item.id,
          tongtien:[`${new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(item.totalPriceOrder)}`]
        }
  })
useEffect(() => {
  (async () => {
    try {
      const { data } = await doGet("order/listOrder");
      console.log(data.data);
      setOrders(data.data)
    } catch (e) {
   
    }
  })();
}, []);
  return (
    <>
        <h3>Danh sách đơn hàng  </h3>
        <Table columns={columns} dataSource={data} />
        <Link to="/">Back</Link>
    </>
  );
}

export default ManageOrder;
