export default function IconView({width, height}) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          width={width}
          height={height}
      >
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.38 20.25h17.25c.62 0 1.125-.5 1.125-1.125V8.9m-6-5.2H3.375c-.62 0-1.125.5-1.125 1.125v14.25c0 .62.5 1.125 1.125 1.125"
        />
        <path strokeLinecap="round" strokeLinejoin="round" fill="currentColor" d="M9.5 9.5l5.9 2.8l-5.9 2.8v-5.5"/>

        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l6-6h-4m4 0v4" />
      </svg>
  );
}
