
const [reviewReset, setreviewReset] = useState(false);
onCancel={() => handleCancel(item.key)}
onClose={() => hideCancelModal(item.key)}
  

  // 주문 상태가 "픽업대기" 또는 "픽업완료"일 때 선택하고 평점을 등록하는 함수
  const handlePickUpComplete = index => {
    setSelectedItem(index);
    setSelectedOrder(prevSelectedOrder => {
      if (prevSelectedOrder.includes(index)) {
        return prevSelectedOrder.filter(itemIndex => itemIndex !== index);
      } else {
        return [...prevSelectedOrder, index];
      }
    });
  
  // 리뷰 모달을 여는 함수
  const showModal = () => {
    setreviewReset(true);
  };

  // 리뷰 모달을 닫는 함수
  const hideModal = () => {
    setreviewReset(false);
  };
  // useEffect(() => {
  //   console.log("reviewReset : ", reviewReset);
  // }, [reviewReset]);


  // 평점 등록이 완료되었을 때 보여줄 메시지 div
  const [reviewSubmit, setreviewSubmit] = useState(false);
  // 평점 등록이 완료된 항목만 상태를 업데이트 하여야 한다.
  const reviewSubmitUpdate = () => {
    console.log(selectedItem, "만 업데이트 하여야 한다. ");
    const arr = reviewList.map((item, index) => {
      if (index === selectedItem) {
        item = true;
      }
      return item;
    });
    setReviewList([...arr]);
    setreviewSubmit(true);
  };

  const tempTest = () => {
    setreviewSubmit(false);
    return <ReviewOk>평점등록이 완료되었습니다</ReviewOk>;
  };


   {/* 리뷰 모달 내용 */}
   <ReviewModal
   reviewReset={reviewReset}
   hideModal={hideModal}
   setreviewSubmit={setreviewSubmit}
   reviewSubmitUpdate={reviewSubmitUpdate}
 />