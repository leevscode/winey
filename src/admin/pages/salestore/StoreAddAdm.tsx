import { Button, Input, Radio, RadioChangeEvent } from "antd";
import React from "react";
import { regionOptions } from "../member/MemberControlAdm";
import { StoreAddWrap } from "../../style/AdminStoreStyle";

const StoreAddAdm = () => {
  const handleCity = (e: RadioChangeEvent) => {
    console.log(e.target.value);
  };
  return (
    <StoreAddWrap>
      <div>
        <Button>저장하기</Button>
      </div>
      <ul>
        <li>지역선택</li>
        <li>
          <Radio.Group
            onChange={e => handleCity(e)}
            // value={regionOptions.regionNmId}
          >
            {regionOptions.map(item => (
              <Radio key={item.regionNmId} value={item.regionNmId}>
                {item.value}
              </Radio>
            ))}
          </Radio.Group>
        </li>
      </ul>
      <ul>
        <li>지점이름</li>{" "}
        <li>
          <Input placeholder="지점명을 입력하세요." />
        </li>
      </ul>
      <ul>
        <li>전화번호</li>{" "}
        <li>
          <Input placeholder="전화번호를 입력하세요." />
        </li>
      </ul>
    </StoreAddWrap>
  );
};

export default StoreAddAdm;
