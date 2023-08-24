/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { getUserKeyword } from "../../api/keywordpatch";
import KeywordEditCp from "../../components/join/KeywordEditCp";

const KeywordSelectEdit = () => {
  const [yourKeyword, setYourKeyword] = useState("");

  const beforeKeyInfo = async () => {
    const data = await getUserKeyword(setYourKeyword);
  };

  useEffect(() => {
    beforeKeyInfo();
    // getUserKeyword(setYourKeyword);
  }, []);
  console.log("yourKeyword", yourKeyword);

  return (
    <>{yourKeyword ? <KeywordEditCp yourKeyword={yourKeyword} /> : null} </>
  );
};

export default KeywordSelectEdit;
