import React from "react";

const Spinner = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
        transform="matrix(0 0 0 0 12 12)"
      >
        <animateTransform
          id="svgSpinnersPulseRings30"
          attributeName="transform"
          begin="0;svgSpinnersPulseRings32.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          type="translate"
          values="12 12;0 0"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          begin="0;svgSpinnersPulseRings32.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          type="scale"
          values="0;1"
        />
        <animate
          attributeName="opacity"
          begin="0;svgSpinnersPulseRings32.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </path>
      <path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
        transform="matrix(0 0 0 0 12 12)"
      >
        <animateTransform
          id="svgSpinnersPulseRings31"
          attributeName="transform"
          begin="svgSpinnersPulseRings30.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          type="translate"
          values="12 12;0 0"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          begin="svgSpinnersPulseRings30.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          type="scale"
          values="0;1"
        />
        <animate
          attributeName="opacity"
          begin="svgSpinnersPulseRings30.begin+0.4s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </path>
      <path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
        transform="matrix(0 0 0 0 12 12)"
      >
        <animateTransform
          id="svgSpinnersPulseRings32"
          attributeName="transform"
          begin="svgSpinnersPulseRings30.begin+0.8s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          type="translate"
          values="12 12;0 0"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          begin="svgSpinnersPulseRings30.begin+0.8s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          type="scale"
          values="0;1"
        />
        <animate
          attributeName="opacity"
          begin="svgSpinnersPulseRings30.begin+0.8s"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          values="1;0"
        />
      </path>
    </svg>
  );
};

export default Spinner;
