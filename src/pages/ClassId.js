import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserById } from "store/users/actions";
import ClassTable from "components/ClassTable";

export default function ClassId() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch]);

  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto" />
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
            <ClassTable />
          </div>
        </div>
      </div>
    </>
  );
}
