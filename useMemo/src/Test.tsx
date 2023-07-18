/*
 * @Author: ccj
 * @Date: 2023-07-18 15:12:10
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-18 15:17:09
 * @Description:
 */
import React, { memo } from "react";

function Test({ data }: { data: any }) {
  console.log("Test", data);
  return <div>Test</div>;
}

export default memo(Test);
