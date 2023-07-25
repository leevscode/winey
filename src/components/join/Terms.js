import { Checkbox, Modal } from "antd";
import React, { useState } from "react";
import { TermsFlex, TermsWarp } from "../../style/JoinStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const PrivateInfo = () => {
  return (
    <div>
      <p>
        1)해당 사이트는 별도의 회원가입 절차 없이 대부분의 컨텐츠에 자유롭게
        접근할 수 있습니다. <br />
        하지만 회원제 서비스를 이용하시고자 할 경우 다음의 정보를 입력해주셔야
        하며, 선택항목을 입력하시지 않았다 하여 서비스 이용에 제한은 없습니다.
        <br /> 회원 가입시 수집하는 개인정보의 범위 <br /> -필수항목 : 희망 ID,
        비밀번호, 이름, 픽업지역, 전화번호 <br /> -선택정보 : 와인선호키워드{" "}
      </p>
      <p>
        2) 수집한 개인정보는 회원님께 최대한으로 최적화되고 맞춤화된 서비스를
        제공하기 위하여 활용되며 그 외의 목적으로는 이용되지 않습니다{" "}
      </p>
    </div>
  );
};

export const TermsInfo = () => {
  return (
    <div>
      <p>
        해당 사이트는 PODOJECT팀이 운영하는 WINEY에서 제공하는 인터넷 와인주문
        서비스입니다.{" "}
      </p>
      <p>
        스터디 목적으로 제작되었으며, 상업적 이용이 불가능함을 알려드립니다.
      </p>
    </div>
  );
};

export const Terms = () => {
  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < checkedList.length);
    setCheckAll(list.length === checkedList.length);
  };
  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? ["1", "2"] : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  // 약관보기 모달창 관련
  const checkTerms = () => {
    Modal.info({
      title: "WINEY 이용약관",
      content: (
        <div>
          <TermsInfo />
        </div>
      ),
      onOk() {},
    });
  };
  const checkedPrivate = () => {
    Modal.info({
      title: "WINEY 개인정보 처리방침",
      content: (
        <div>
          <PrivateInfo />
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <TermsWarp>
      <span>
        이용약관동의 <b>*</b>
      </span>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        전체 동의합니다.
      </Checkbox>
      <TermsFlex>
        <Checkbox.Group value={checkedList} onChange={onChange}>
          <Checkbox value="1">
            이용약관 동의 <strong>(필수)</strong>
          </Checkbox>{" "}
          <span onClick={checkTerms}>
            약관보기
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
          <Checkbox value="2">
            개인정보 수집·이용 동의 <strong>(필수)</strong>
          </Checkbox>
          <span onClick={checkedPrivate}>
            약관보기
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </Checkbox.Group>
      </TermsFlex>
    </TermsWarp>
  );
};
