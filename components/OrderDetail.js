import React, {  } from "react";

function OrderDetail({match}) {
  return <div>{match.params.orderId}</div>

}
export default OrderDetail;
