import React from 'react'

export default function Success({success}) {
  return (
    <div>
      <div className="alert alert-success text-center" role="alert">
         {success}
      </div>
    </div>
  );
}