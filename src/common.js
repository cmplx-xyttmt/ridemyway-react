/* eslint-disable import/prefer-default-export */
import React from 'react';

export const Spinner = () => (
  <div className="center-block">
    <div className="preloader-wrapper small active valign-wrapper">
      <div className="spinner-layer spinner-red-only">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  </div>
);
