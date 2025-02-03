import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const user = useParams();
  return (
    <div className="bg-orange-500 text-black text-3xl py-5 text-center">
      User: {user.userid}
    </div>
  );
}

export default User;
