import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getInstructorById } from "store/users/actions";
import InstructorDetail from "components/InstructorDetail";

export default function InstructorId() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInstructorById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto" />
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
           <InstructorDetail />
          </div>
        </div>
      </div>
    </>
  );
}
