import { Button, Form, Input, Radio, RadioChangeEvent } from "antd";
import React, { useState } from "react";
import { regionOptions } from "../member/MemberControlAdm";
import { StoreAddWrap } from "../../style/AdminStoreStyle";
import { postNewStore } from "../../api/patchAdmStore";
import {
  INewStoreState,
  IStoreDetailList,
} from "../../interface/StoreInterface";

const StoreAddAdm: React.FC = () => {
  const [newStoreInfo, setNewStoreInfo] = useState<IStoreDetailList>({
    regionNmId: 0,
    nm: "0",
    tel: "0",
  });
  const handleCity = (e: RadioChangeEvent) => {
    setNewStoreInfo(prevState => ({
      ...prevState,
      regionNmId: e.target.value,
    }));
  };
  const handleStoreName: React.ChangeEventHandler<HTMLInputElement> = e => {
    setNewStoreInfo(prevState => ({
      ...prevState,
      tel: e.target.value,
    }));
  };
  const handleStoreNumber: React.ChangeEventHandler<HTMLInputElement> = e => {
    setNewStoreInfo(prevState => ({
      ...prevState,
      nm: e.target.value,
    }));
  };

  const handleStoreSave = () => {
    postNewStore(newStoreInfo);
  };
  console.log("newStoreInfo", newStoreInfo);
  return (
    <StoreAddWrap>
      <div>
        <Button onClick={handleStoreSave}>저장하기</Button>
      </div>
      <ul>
        <li>지역선택</li>
        <li>
          <Form.Item>
            <Radio.Group
              onChange={e => handleCity(e)}
              // value={regionOptions.regionNmId}
            >
              {regionOptions.map(item => (
                <Radio key={item.regionNmId} value={item.regionNmId}>
                  {item.value}
                </Radio>
              ))}
            </Radio.Group>{" "}
          </Form.Item>
        </li>
      </ul>
      <ul>
        <li>지점이름</li>
        <li>
          <Form.Item>
            <Input
              placeholder="지점명을 입력하세요."
              onChange={e => handleStoreName(e)}
            />
          </Form.Item>
        </li>
      </ul>
      <ul>
        <li>전화번호</li>{" "}
        <li>
          <Form.Item>
            <Input
              placeholder="전화번호를 입력하세요."
              onChange={e => handleStoreNumber(e)}
            />
          </Form.Item>
        </li>
      </ul>
    </StoreAddWrap>
  );
};

export default StoreAddAdm;
