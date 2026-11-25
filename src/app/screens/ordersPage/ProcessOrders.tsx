import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { Order, OrderItem } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { retrieveProcessOrders } from "./selector";

const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders }),
);

export default function ProcessOrders() {
  const { processOrders } = useSelector(processOrdersRetriever);

  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders.length > 0
          ? processOrders.map((order: Order) => {
              return (
                <Box key={order._id} className="order-main-box">
                  <Box className={"order-box-scroll"}>
                    {order.orderItems.map((item: OrderItem) => {
                      const product: Product = order.productData.filter(
                        (ele: Product) => ele._id === item.productId,
                      )[0];

                      const imagePath = `${serverApi}/${product.productImages[0]}`;

                      return (
                        <Box key={product._id} className="orders-name-price">
                          <img
                            src={imagePath}
                            alt={product.productName}
                            className="order-dish-img"
                          />
                          <p className="title-dish">{product.productName}</p>

                          <Box className={"price-box"}>
                            <p>${item.itemPrice}</p>
                            <img src="/icons/close.svg" alt="" />
                            <p>{item.itemQuantity}</p>
                            <img src="/icons/pause.svg" alt="" />
                            <p style={{ marginLeft: "15px" }}>
                              ${item.itemPrice * item.itemQuantity}
                            </p>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>

                  <Box className={"total-price-box"}>
                    <Box className={"box-total"}>
                      <p>Product price</p>
                      <p>
                        $
                        {order.orderItems.reduce(
                          (
                            total: number,
                            item: {
                              itemPrice: number;
                              itemQuantity: number;
                            },
                          ) => total + item.itemPrice * item.itemQuantity,
                          0,
                        )}
                      </p>

                      <img
                        src={"/icons/plus.svg"}
                        style={{ marginLeft: "20px" }}
                      />

                      <p>delivery cost</p>
                      <p>${order.orderDelivery}</p>

                      <img
                        src={"/icons/pause.svg"}
                        style={{ marginLeft: "20px" }}
                      />

                      <p>Total</p>
                      <p>
                        $
                        {order.orderItems.reduce(
                          (total, item) =>
                            total + item.itemPrice * item.itemQuantity,
                          0,
                        ) + order.orderDelivery}
                      </p>
                    </Box>

                    <p className={"data-compl"}>
                      {moment().format("YY-MM-DD HH:mm")}
                    </p>

                    <Button variant="contained" className={"verify-button"}>
                      Verify to Fulfil
                    </Button>
                  </Box>
                </Box>
              );
            })
          : null}

        {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
