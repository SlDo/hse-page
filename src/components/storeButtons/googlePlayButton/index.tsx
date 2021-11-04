import React from 'react';
import { StoreButton, StoreButtonProps } from '..';

export const GooglePlayButton = ({ href }: StoreButtonProps): JSX.Element => (
  <StoreButton href={href}>
    <svg width="136" height="40" viewBox="0 0 136 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.664062" y="6.10352e-05" width="135" height="40" rx="5" fill="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5.66406 6.10352e-05H130.664C133.425 6.10352e-05 135.664 2.23864 135.664 5.00006V35.0001C135.664 37.7615 133.425 40.0001 130.664 40.0001H5.66406C2.90264 40.0001 0.664062 37.7615 0.664062 35.0001V5.00006C0.664062 2.23864 2.90264 6.10352e-05 5.66406 6.10352e-05ZM134.864 5.00006C134.864 2.68046 132.984 0.800061 130.664 0.800061H5.66406C3.34447 0.800061 1.46406 2.68046 1.46406 5.00006V35.0001C1.46406 37.3197 3.34447 39.2001 5.66406 39.2001H130.664C132.984 39.2001 134.864 37.3197 134.864 35.0001V5.00006Z" fill="#A6A6A6" />
      <path fillRule="evenodd" clipRule="evenodd" d="M48.4041 23.0601V24.8601H52.7241C52.6563 25.7079 52.3039 26.5079 51.7241 27.1301C50.8477 28.0229 49.634 28.5026 48.3841 28.4501C45.7331 28.4501 43.5841 26.301 43.5841 23.6501C43.5841 20.9991 45.7331 18.8501 48.3841 18.8501C49.6045 18.8319 50.783 19.2954 51.6641 20.1401L52.9341 18.8701C51.73 17.6792 50.0973 17.0232 48.4041 17.0501C45.983 16.9558 43.7045 18.1937 42.4659 20.2761C41.2274 22.3585 41.2274 24.9516 42.4659 27.034C43.7045 29.1164 45.983 30.3543 48.4041 30.2601C50.1343 30.3292 51.8116 29.656 53.0141 28.4101C54.0642 27.2565 54.6237 25.7392 54.5741 24.1801C54.5776 23.8048 54.5475 23.43 54.4841 23.0601H48.4041ZM59.4841 21.7501C57.1313 21.7556 55.2286 23.6673 55.2341 26.0201C55.2396 28.3728 57.1514 30.2756 59.5041 30.27C61.8568 30.2645 63.7596 28.3528 63.7541 26.0001C63.7705 24.8644 63.3253 23.7708 62.5203 22.9696C61.7153 22.1684 60.6196 21.7283 59.4841 21.7501ZM64.5541 26.0201C64.5486 23.6673 66.4513 21.7556 68.8041 21.7501C69.9396 21.7283 71.0353 22.1684 71.8403 22.9696C72.6453 23.7708 73.0905 24.8644 73.0741 26.0001C73.0796 28.3528 71.1768 30.2645 68.8241 30.27C66.4714 30.2756 64.5596 28.3728 64.5541 26.0201ZM66.2961 27.1185C66.7527 28.0744 67.7473 28.654 68.8041 28.5801C69.4674 28.5647 70.0963 28.282 70.5482 27.7962C71.0001 27.3105 71.2366 26.6627 71.2041 26.0001C71.2015 24.9407 70.5516 23.9906 69.5653 23.6041C68.5789 23.2177 67.4566 23.4735 66.735 24.2491C66.0135 25.0247 65.8394 26.1626 66.2961 27.1185ZM56.9761 27.1185C57.4327 28.0744 58.4273 28.654 59.4841 28.5801C60.1474 28.5647 60.7763 28.282 61.2282 27.7962C61.6801 27.3105 61.9166 26.6627 61.8841 26.0001C61.8815 24.9407 61.2316 23.9906 60.2453 23.6041C59.2589 23.2177 58.1366 23.4735 57.415 24.2491C56.6935 25.0247 56.5194 26.1626 56.9761 27.1185ZM90.0741 21.7501C91.732 21.8111 93.1801 22.8893 93.7141 24.4601L93.9241 24.9001L88.2341 27.2501C88.5885 28.0642 89.4069 28.5767 90.2941 28.5401C91.1489 28.5484 91.9442 28.1032 92.3841 27.3701L93.8341 28.3701C92.8012 29.9348 90.8615 30.6329 89.0683 30.0852C87.2752 29.5376 86.0565 27.8749 86.0741 26.0001C86.005 24.8966 86.3957 23.8137 87.1534 23.0086C87.9112 22.2035 88.9684 21.7479 90.0741 21.7501ZM87.9141 25.8801C87.8731 25.2536 88.0867 24.6371 88.5065 24.1702C88.9263 23.7034 89.5168 23.4257 90.1441 23.4001C90.8005 23.358 91.4186 23.7123 91.7141 24.3001L87.9141 25.8801ZM85.1641 30.0001H83.2941V17.5001H85.1641V30.0001ZM80.2341 22.7001H80.1641C79.5896 22.0748 78.7729 21.7284 77.9241 21.7501C75.6542 21.8601 73.8704 23.7325 73.8704 26.0051C73.8704 28.2776 75.6542 30.15 77.9241 30.2601C78.7825 30.2773 79.6038 29.9106 80.1641 29.2601H80.2341V29.8701C80.2341 31.5001 79.3641 32.3701 77.9641 32.3701C77.0076 32.3491 76.1584 31.7527 75.8141 30.8601L74.1941 31.5301C74.8072 33.0701 76.3067 34.0723 77.9641 34.0501C80.1541 34.0501 81.9641 32.7601 81.9641 29.6201V22.0001H80.2341V22.7001ZM75.6646 26.0051C75.6646 27.3676 76.7242 28.4953 78.0841 28.5801C78.734 28.5551 79.3454 28.2652 79.776 27.7779C80.2067 27.2905 80.4192 26.6481 80.3641 26.0001C80.4134 25.3543 80.1987 24.7162 79.7689 24.2317C79.3391 23.7473 78.7311 23.458 78.0841 23.4301C76.7242 23.5149 75.6646 24.6425 75.6646 26.0051ZM102.474 17.5001H97.9941V30.0001H99.8641V25.2601H102.474C103.927 25.3644 105.316 24.6486 106.074 23.405C106.832 22.1615 106.832 20.5986 106.074 19.3551C105.316 18.1116 103.927 17.3957 102.474 17.5001ZM99.8641 23.5001H102.474L102.514 23.5201C103.696 23.5201 104.654 22.562 104.654 21.3801C104.654 20.1982 103.696 19.2401 102.514 19.2401H99.8641V23.5001ZM114.014 21.7101C112.622 21.6242 111.313 22.3753 110.684 23.6201L112.334 24.3101C112.675 23.696 113.344 23.3395 114.044 23.4001C114.524 23.3441 115.006 23.483 115.382 23.7858C115.758 24.0885 115.996 24.5296 116.044 25.0101V25.1301C115.443 24.814 114.773 24.6492 114.094 24.6501C112.314 24.6501 110.494 25.6501 110.494 27.4701C110.53 28.2516 110.881 28.9854 111.467 29.5037C112.053 30.0219 112.824 30.2804 113.604 30.2201C114.559 30.2729 115.469 29.8066 115.984 29.0001H116.044V30.0001H117.844V25.1901C117.844 23.0001 116.184 21.7301 114.054 21.7301L114.014 21.7101ZM112.324 27.5001C112.324 28.2501 113.174 28.5601 113.784 28.5601L113.824 28.5801C114.954 28.5575 115.894 27.7032 116.024 26.5801C115.505 26.2905 114.918 26.1454 114.324 26.1601C113.384 26.1601 112.324 26.5001 112.324 27.5001ZM124.404 22.0001L122.264 27.4201H122.204L119.984 22.0001H117.984L121.314 29.5801L119.414 33.7901H121.414L126.484 22.0001H124.404ZM109.464 30.0001H107.604V17.5001H109.464V30.0001Z" fill="white" />
      <path d="M11.1041 7.54003C10.7853 7.93409 10.628 8.43447 10.6641 8.94003V31.06C10.63 31.5704 10.799 32.0736 11.1341 32.46L11.2041 32.54L23.5641 20.15V19.85L11.1741 7.47003L11.1041 7.54003Z" fill="url(#paint0_linear)" />
      <path d="M27.6641 24.28L23.5641 20.15V19.85L27.6641 15.72L27.7541 15.78L32.6641 18.56C34.0641 19.35 34.0641 20.65 32.6641 21.45L27.7741 24.23L27.6641 24.28Z" fill="url(#paint1_linear)" />
      <path d="M27.7841 24.2301L23.5641 20.0001L11.1041 32.4601C11.6871 32.979 12.5573 33.0085 13.1741 32.5301L27.7841 24.2301Z" fill="url(#paint2_linear)" />
      <path d="M27.7841 15.78L13.1741 7.48003C12.561 6.99475 11.688 7.02006 11.1041 7.54003L23.5641 20L27.7841 15.78Z" fill="url(#paint3_linear)" />
      <path opacity="0.2" d="M27.6641 24.1301L13.1741 32.3801C12.5822 32.8267 11.7659 32.8267 11.1741 32.3801L11.1041 32.4501L11.1741 32.5301C11.7659 32.9767 12.5822 32.9767 13.1741 32.5301L27.7841 24.2301L27.6641 24.1301Z" fill="black" />
      <path opacity="0.12" d="M11.1041 32.32C10.7829 31.9234 10.6254 31.419 10.6641 30.91V31.06C10.63 31.5704 10.799 32.0736 11.1341 32.46L11.2041 32.39L11.1041 32.32Z" fill="black" />
      <path opacity="0.12" d="M32.6641 21.3001L27.6641 24.1301L27.7541 24.2301L32.6641 21.4401C33.2545 21.1904 33.6611 20.638 33.7241 20.0001C33.5973 20.5772 33.2038 21.0597 32.6641 21.3001Z" fill="black" />
      <path opacity="0.25" d="M13.1741 7.62004L32.6641 18.7C33.2038 18.9404 33.5973 19.4229 33.7241 20C33.6611 19.3621 33.2545 18.8097 32.6641 18.56L13.1741 7.48004C11.7841 6.68004 10.6641 7.34004 10.6641 8.94004V9.09004C10.6641 7.49004 11.7841 6.83004 13.1741 7.62004Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M42.0441 14.2701H42.7741V13.0001H47.3241V14.2601H48.0641V12.2601H47.3941V7.00006H43.3941V10.0001C43.4956 10.8272 43.2287 11.6571 42.6641 12.2701H42.0441V14.2701ZM43.5941 12.2901C44.01 11.6014 44.2087 10.8033 44.1641 10.0001V7.74006H46.5941V12.2901H43.5941Z" fill="white" />
      <path d="M42.7741 14.2701V14.3701H42.8741V14.2701H42.7741ZM42.0441 14.2701H41.9441V14.3701H42.0441V14.2701ZM42.7741 13.0001V12.9001H42.6741V13.0001H42.7741ZM47.3241 13.0001H47.4241V12.9001H47.3241V13.0001ZM47.3241 14.2601H47.2241V14.3601H47.3241V14.2601ZM48.0641 14.2601V14.3601H48.1641V14.2601H48.0641ZM48.0641 12.2601H48.1641V12.1601H48.0641V12.2601ZM47.3941 12.2601H47.2941V12.3601H47.3941V12.2601ZM47.3941 7.00006H47.4941V6.90006H47.3941V7.00006ZM43.3941 7.00006V6.90006H43.2941V7.00006H43.3941ZM43.3941 10.0001H43.2933L43.2948 10.0122L43.3941 10.0001ZM42.6641 12.2701V12.3701H42.7079L42.7376 12.3378L42.6641 12.2701ZM42.0441 12.2701V12.1701H41.9441V12.2701H42.0441ZM44.1641 10.0001H44.0639L44.0642 10.0056L44.1641 10.0001ZM43.5941 12.2901L43.5085 12.2384L43.4168 12.3901H43.5941V12.2901ZM44.1641 7.74006V7.64006H44.0641V7.74006H44.1641ZM46.5941 7.74006H46.6941V7.64006H46.5941V7.74006ZM46.5941 12.2901V12.3901H46.6941V12.2901H46.5941ZM42.7741 14.1701H42.0441V14.3701H42.7741V14.1701ZM42.6741 13.0001V14.2701H42.8741V13.0001H42.6741ZM47.3241 12.9001H42.7741V13.1001H47.3241V12.9001ZM47.4241 14.2601V13.0001H47.2241V14.2601H47.4241ZM48.0641 14.1601H47.3241V14.3601H48.0641V14.1601ZM47.9641 12.2601V14.2601H48.1641V12.2601H47.9641ZM47.3941 12.3601H48.0641V12.1601H47.3941V12.3601ZM47.2941 7.00006V12.2601H47.4941V7.00006H47.2941ZM43.3941 7.10006H47.3941V6.90006H43.3941V7.10006ZM43.4941 10.0001V7.00006H43.2941V10.0001H43.4941ZM42.7376 12.3378C43.3221 11.7033 43.5984 10.8441 43.4933 9.98788L43.2948 10.0122C43.3927 10.8102 43.1352 11.611 42.5905 12.2023L42.7376 12.3378ZM42.0441 12.3701H42.6641V12.1701H42.0441V12.3701ZM42.1441 14.2701V12.2701H41.9441V14.2701H42.1441ZM44.0642 10.0056C44.1077 10.7888 43.914 11.5669 43.5085 12.2384L43.6797 12.3418C44.106 11.6359 44.3096 10.8179 44.2639 9.99452L44.0642 10.0056ZM44.0641 7.74006V10.0001H44.2641V7.74006H44.0641ZM46.5941 7.64006H44.1641V7.84006H46.5941V7.64006ZM46.6941 12.2901V7.74006H46.4941V12.2901H46.6941ZM43.5941 12.3901H46.5941V12.1901H43.5941V12.3901Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M51.8741 13.1319C52.6993 13.1319 53.4908 12.8039 54.0741 12.2201C54.6656 11.6354 54.988 10.8315 54.9641 10.0001C54.9759 9.16896 54.6513 8.36832 54.0641 7.78008C53.4808 7.19629 52.6893 6.86829 51.8641 6.86829C51.0388 6.86829 50.2474 7.19629 49.6641 7.78008C49.0878 8.37327 48.7743 9.17329 48.7941 10.0001C48.7769 10.8283 49.0941 11.6285 49.6741 12.2201C50.2574 12.8039 51.0488 13.1319 51.8741 13.1319ZM51.8741 12.4001C51.2601 12.4086 50.67 12.1624 50.2441 11.7201C49.7991 11.2605 49.5608 10.6393 49.5841 10.0001C49.5608 9.36082 49.7991 8.73969 50.2441 8.28008C50.67 7.83774 51.2601 7.59156 51.8741 7.60008C52.4888 7.5879 53.0803 7.83466 53.5041 8.28008C53.9557 8.73607 54.1982 9.35876 54.1741 10.0001C54.1982 10.6414 53.9557 11.2641 53.5041 11.7201C53.0803 12.1655 52.4888 12.4123 51.8741 12.4001Z" fill="white" />
      <path d="M54.0741 12.2201L54.0038 12.149L54.0033 12.1494L54.0741 12.2201ZM54.9641 10.0001L54.864 9.99866L54.8641 10.003L54.9641 10.0001ZM54.0641 7.78008L54.1348 7.70943L54.1348 7.7094L54.0641 7.78008ZM49.6641 7.78008L49.5933 7.70939L49.5923 7.7104L49.6641 7.78008ZM48.7941 10.0001L48.8941 10.0022L48.894 9.99769L48.7941 10.0001ZM49.6741 12.2201L49.6027 12.2901L49.6033 12.2908L49.6741 12.2201ZM50.2441 11.7201L50.3161 11.6507L50.3159 11.6505L50.2441 11.7201ZM51.8741 12.4001L51.8761 12.3L51.8727 12.3001L51.8741 12.4001ZM49.5841 10.0001L49.6843 10.0037L49.684 9.99644L49.5841 10.0001ZM50.2441 8.28008L50.3159 8.34964L50.3161 8.34944L50.2441 8.28008ZM51.8741 7.60008L51.8727 7.70013L51.876 7.70006L51.8741 7.60008ZM53.5041 8.28008L53.4316 8.34903L53.433 8.35045L53.5041 8.28008ZM54.1741 10.0001L54.0739 9.9963L54.0741 10.0039L54.1741 10.0001ZM53.5041 11.7201L53.433 11.6497L53.4316 11.6512L53.5041 11.7201ZM54.0033 12.1494C53.4388 12.7144 52.6728 13.0319 51.8741 13.0319V13.2319C52.7259 13.2319 53.5427 12.8933 54.1448 12.2908L54.0033 12.1494ZM54.8641 10.003C54.8872 10.8066 54.5756 11.5838 54.0038 12.149L54.1444 12.2912C54.7557 11.6871 55.0887 10.8563 55.064 9.99721L54.8641 10.003ZM53.9933 7.85073C54.5615 8.41988 54.8755 9.19451 54.8641 9.99866L55.0641 10.0015C55.0763 9.1434 54.7412 8.31677 54.1348 7.70943L53.9933 7.85073ZM51.8641 6.96829C52.6628 6.96829 53.4288 7.28575 53.9933 7.85076L54.1348 7.7094C53.5327 7.10684 52.7159 6.76829 51.8641 6.76829V6.96829ZM49.7348 7.85076C50.2994 7.28575 51.0653 6.96829 51.8641 6.96829V6.76829C51.0123 6.76829 50.1954 7.10684 49.5933 7.7094L49.7348 7.85076ZM48.894 9.99769C48.8749 9.19774 49.1782 8.42369 49.7358 7.84976L49.5923 7.7104C48.9973 8.32284 48.6736 9.14884 48.6941 10.0025L48.894 9.99769ZM49.7455 12.1501C49.1844 11.5777 48.8774 10.8035 48.894 10.0022L48.6941 9.99801C48.6764 10.8531 49.0039 11.6793 49.6027 12.2901L49.7455 12.1501ZM51.8741 13.0319C51.0753 13.0319 50.3094 12.7144 49.7448 12.1494L49.6033 12.2908C50.2054 12.8933 51.0223 13.2319 51.8741 13.2319V13.0319ZM50.172 11.7894C50.6171 12.2517 51.2338 12.509 51.8755 12.5001L51.8727 12.3001C51.2863 12.3082 50.7228 12.0731 50.3161 11.6507L50.172 11.7894ZM49.4841 9.99644C49.4599 10.6629 49.7084 11.3105 50.1722 11.7896L50.3159 11.6505C49.8899 11.2105 49.6617 10.6158 49.684 10.0037L49.4841 9.99644ZM50.1722 8.21053C49.7084 8.68969 49.4599 9.33725 49.4841 10.0037L49.684 9.99644C49.6617 9.38438 49.8899 8.78969 50.3159 8.34964L50.1722 8.21053ZM51.8755 7.50009C51.2338 7.49119 50.6171 7.74846 50.172 8.21072L50.3161 8.34944C50.7228 7.92703 51.2863 7.69194 51.8727 7.70007L51.8755 7.50009ZM53.5765 8.21115C53.1334 7.74539 52.5149 7.48736 51.8721 7.5001L51.876 7.70006C52.4627 7.68843 53.0272 7.92393 53.4316 8.34901L53.5765 8.21115ZM54.274 10.0039C54.2992 9.33488 54.0462 8.68535 53.5751 8.20971L53.433 8.35045C53.8652 8.78678 54.0973 9.38263 54.0741 9.99631L54.274 10.0039ZM53.5751 11.7905C54.0462 11.3148 54.2992 10.6653 54.274 9.99631L54.0741 10.0039C54.0973 10.6175 53.8652 11.2134 53.433 11.6497L53.5751 11.7905ZM51.8721 12.5001C52.5149 12.5128 53.1334 12.2548 53.5765 11.789L53.4316 11.6512C53.0272 12.0762 52.4627 12.3117 51.876 12.3001L51.8721 12.5001Z" fill="white" />
      <path d="M58.8441 13.1301C58.0265 13.1429 57.2391 12.8214 56.6641 12.2401C56.0636 11.6524 55.7372 10.8398 55.7641 10.0001C55.7448 9.16592 56.067 8.3601 56.656 7.76917C57.2451 7.17825 58.0499 6.85348 58.8841 6.87006C59.7324 6.84606 60.5443 7.21511 61.0841 7.87006L60.5541 8.39006C60.1554 7.87751 59.5327 7.59041 58.8841 7.62006C58.2619 7.60419 57.6609 7.84675 57.2241 8.29006C56.7593 8.73613 56.502 9.356 56.5141 10.0001C56.4859 10.645 56.7288 11.2723 57.1841 11.7301C57.6209 12.1734 58.2219 12.4159 58.8441 12.4001C59.5504 12.397 60.2182 12.0778 60.6641 11.5301L61.2041 12.0601C60.9301 12.3884 60.5892 12.6543 60.2041 12.8401C59.7787 13.0388 59.3135 13.138 58.8441 13.1301Z" fill="white" stroke="white" strokeWidth="0.2" />
      <path d="M64.3441 13.0001H63.5741V7.74006H61.8941V7.00006H66.0141V7.74006H64.3441V13.0001Z" fill="white" stroke="white" strokeWidth="0.2" />
      <path d="M71.3141 7.00006L69.0441 12.0601C68.9326 12.4707 68.6465 12.8116 68.2615 12.9926C67.8764 13.1736 67.4313 13.1763 67.0441 13.0001L67.2441 12.2901C67.3664 12.3588 67.5038 12.3966 67.6441 12.4001C67.792 12.4075 67.9387 12.3691 68.0641 12.2901C68.1855 12.189 68.2786 12.058 68.3341 11.9101L68.5541 11.4301L66.5341 7.00006H67.4441L68.9241 10.4401L70.4041 7.00006H71.3141Z" fill="white" stroke="white" strokeWidth="0.2" />
      <path d="M72.1841 13.0001V7.00006H76.5241V13.0001H75.7541V7.74006H72.9541V13.0001H72.1841Z" fill="white" stroke="white" strokeWidth="0.2" />
      <path d="M77.8941 13.0001V7.00006H78.6641V9.57006H81.6641V7.00006H82.4441V13.0001H81.6641V10.2901H78.6641V13.0001H77.8941Z" fill="white" stroke="white" strokeWidth="0.2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M86.5241 13.1319C87.3493 13.1319 88.1408 12.8039 88.7241 12.2201C89.312 11.6337 89.6306 10.83 89.6041 10.0001C89.628 9.1687 89.3056 8.36472 88.7141 7.78008C88.1325 7.1969 87.3427 6.86914 86.5191 6.86914C85.6954 6.86914 84.9057 7.1969 84.3241 7.78008C83.7325 8.36472 83.4102 9.1687 83.4341 10.0001C83.4102 10.8315 83.7325 11.6354 84.3241 12.2201C84.9074 12.8039 85.6988 13.1319 86.5241 13.1319ZM86.5241 12.4001C85.9094 12.4123 85.3179 12.1655 84.8941 11.7201C84.4424 11.2641 84.1999 10.6414 84.2241 10.0001C84.1999 9.35876 84.4424 8.73607 84.8941 8.28008C85.3179 7.83466 85.9094 7.5879 86.5241 7.60008C87.1381 7.59156 87.7282 7.83774 88.1541 8.28008C88.599 8.73969 88.8373 9.36082 88.8141 10.0001C88.8373 10.6393 88.599 11.2605 88.1541 11.7201C87.7282 12.1624 87.1381 12.4086 86.5241 12.4001Z" fill="white" />
      <path d="M88.7241 12.2201L88.6534 12.1493L88.6533 12.1494L88.7241 12.2201ZM89.6041 10.0001L89.5039 9.9972L89.5041 10.0033L89.6041 10.0001ZM88.7141 7.78008L88.6433 7.8507L88.6438 7.85121L88.7141 7.78008ZM84.3241 7.78008L84.3944 7.85121L84.3949 7.8507L84.3241 7.78008ZM83.4341 10.0001L83.5342 10.003L83.534 9.99721L83.4341 10.0001ZM84.3241 12.2201L84.3948 12.1494L84.3944 12.149L84.3241 12.2201ZM84.8941 11.7201L84.9665 11.6511L84.9651 11.6497L84.8941 11.7201ZM86.5241 12.4001L86.5255 12.3L86.5221 12.3001L86.5241 12.4001ZM84.2241 10.0001L84.3243 10.0039L84.324 9.99631L84.2241 10.0001ZM84.8941 8.28008L84.9651 8.35047L84.9665 8.34901L84.8941 8.28008ZM86.5241 7.60008L86.5221 7.70012L86.5255 7.70007L86.5241 7.60008ZM88.1541 8.28008L88.082 8.34944L88.0822 8.34964L88.1541 8.28008ZM88.8141 10.0001L88.7139 9.99644L88.7141 10.0037L88.8141 10.0001ZM88.1541 11.7201L88.0822 11.6505L88.082 11.6507L88.1541 11.7201ZM88.6533 12.1494C88.0888 12.7144 87.3228 13.0319 86.5241 13.0319V13.2319C87.3759 13.2319 88.1927 12.8933 88.7948 12.2908L88.6533 12.1494ZM89.5041 10.0033C89.5298 10.8055 89.2218 11.5825 88.6534 12.1493L88.7947 12.2909C89.4022 11.685 89.7314 10.8544 89.704 9.99689L89.5041 10.0033ZM88.6438 7.85121C89.2156 8.41636 89.5272 9.19354 89.5041 9.99721L89.704 10.003C89.7287 9.14387 89.3957 8.31308 88.7844 7.70896L88.6438 7.85121ZM86.5191 6.96914C87.3161 6.96914 88.0804 7.28633 88.6433 7.8507L88.7849 7.70947C88.1845 7.10747 87.3693 6.76914 86.5191 6.76914V6.96914ZM84.3949 7.8507C84.9577 7.28633 85.722 6.96914 86.5191 6.96914V6.76914C85.6689 6.76914 84.8536 7.10747 84.2533 7.70947L84.3949 7.8507ZM83.534 9.99721C83.5109 9.19354 83.8225 8.41636 84.3944 7.85121L84.2538 7.70896C83.6425 8.31308 83.3094 9.14387 83.3341 10.003L83.534 9.99721ZM84.3944 12.149C83.8225 11.5838 83.5109 10.8066 83.534 10.003L83.3341 9.99721C83.3094 10.8563 83.6425 11.6871 84.2538 12.2912L84.3944 12.149ZM86.5241 13.0319C85.7253 13.0319 84.9594 12.7144 84.3948 12.1494L84.2533 12.2908C84.8554 12.8933 85.6723 13.2319 86.5241 13.2319V13.0319ZM84.8216 11.789C85.2648 12.2548 85.8833 12.5128 86.526 12.5001L86.5221 12.3001C85.9355 12.3117 85.371 12.0762 84.9665 11.6512L84.8216 11.789ZM84.1241 9.99631C84.0989 10.6653 84.3519 11.3148 84.823 11.7905L84.9651 11.6497C84.533 11.2134 84.3009 10.6175 84.324 10.0039L84.1241 9.99631ZM84.823 8.20971C84.3519 8.68535 84.0989 9.33488 84.1241 10.0039L84.324 9.99631C84.3009 9.38263 84.533 8.78678 84.9651 8.35045L84.823 8.20971ZM86.526 7.5001C85.8833 7.48736 85.2648 7.74539 84.8216 8.21115L84.9665 8.34901C85.371 7.92393 85.9355 7.68844 86.5221 7.70006L86.526 7.5001ZM88.2261 8.21072C87.781 7.74846 87.1643 7.49119 86.5227 7.50009L86.5255 7.70007C87.1118 7.69194 87.6753 7.92703 88.082 8.34944L88.2261 8.21072ZM88.914 10.0037C88.9383 9.33725 88.6898 8.68969 88.2259 8.21053L88.0822 8.34964C88.5082 8.78969 88.7364 9.38438 88.7141 9.99645L88.914 10.0037ZM88.2259 11.7896C88.6898 11.3105 88.9383 10.6629 88.914 9.99645L88.7141 10.0037C88.7364 10.6158 88.5082 11.2105 88.0822 11.6505L88.2259 11.7896ZM86.5227 12.5001C87.1643 12.509 87.781 12.2517 88.2261 11.7894L88.082 11.6507C87.6753 12.0731 87.1118 12.3082 86.5255 12.3001L86.5227 12.5001Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M92.7541 13.0001V7.00009H94.9241C95.3739 6.99558 95.8092 7.15968 96.1441 7.46009C96.4812 7.7545 96.6714 8.18255 96.6641 8.63009C96.6665 8.89947 96.59 9.16366 96.4441 9.39009C96.2964 9.6048 96.0922 9.77441 95.8541 9.88009C96.1413 9.9762 96.3925 10.1576 96.5741 10.4001C96.7649 10.642 96.8672 10.942 96.8641 11.2501C96.8744 11.7168 96.6765 12.1639 96.3241 12.4701C95.977 12.7931 95.5181 12.9687 95.0441 12.9601L92.7541 13.0001ZM93.5241 9.57009H94.9241C95.1894 9.58544 95.4473 9.47862 95.6241 9.28009C95.7936 9.11392 95.8907 8.88748 95.8941 8.65009C95.9035 8.41196 95.8212 8.17928 95.6641 8.00009C95.4938 7.81126 95.248 7.70853 94.9941 7.72009H93.5241V9.57009ZM95.0741 12.2601H93.5241V10.2901H95.0441C95.3266 10.2828 95.5991 10.3954 95.7941 10.6001C95.968 10.7805 96.068 11.0196 96.0741 11.2701C96.0732 11.5227 95.9767 11.7657 95.8041 11.9501C95.6192 12.1572 95.3515 12.2709 95.0741 12.2601Z" fill="white" />
      <path d="M92.7541 7.00009V6.90009H92.6541V7.00009H92.7541ZM92.7541 13.0001H92.6541V13.1019L92.7558 13.1001L92.7541 13.0001ZM94.9241 7.00009V7.1001L94.9251 7.10009L94.9241 7.00009ZM96.1441 7.46009L96.0773 7.53454L96.0783 7.53541L96.1441 7.46009ZM96.6641 8.63009L96.564 8.62844L96.5641 8.63099L96.6641 8.63009ZM96.4441 9.39009L96.5265 9.44677L96.5281 9.44427L96.4441 9.39009ZM95.8541 9.88009L95.8135 9.78869L95.578 9.89318L95.8223 9.97492L95.8541 9.88009ZM96.5741 10.4001L96.494 10.46L96.4955 10.462L96.5741 10.4001ZM96.8641 11.2501L96.764 11.2491L96.7641 11.2523L96.8641 11.2501ZM96.3241 12.4701L96.2584 12.3946L96.2559 12.3969L96.3241 12.4701ZM95.0441 12.9601L95.0459 12.86L95.0423 12.8601L95.0441 12.9601ZM94.9241 9.57009L94.9298 9.47009H94.9241V9.57009ZM93.5241 9.57009H93.4241V9.67009H93.5241V9.57009ZM95.6241 9.28009L95.5539 9.2085L95.5494 9.21359L95.6241 9.28009ZM95.8941 8.65009L95.7941 8.64612L95.7941 8.64867L95.8941 8.65009ZM95.6641 8.00009L95.7393 7.93416L95.7383 7.93314L95.6641 8.00009ZM94.9941 7.72009V7.82019L94.9986 7.81999L94.9941 7.72009ZM93.5241 7.72009V7.62009H93.4241V7.72009H93.5241ZM93.5241 12.2601H93.4241V12.3601H93.5241V12.2601ZM95.0741 12.2601L95.078 12.1601H95.0741V12.2601ZM93.5241 10.2901V10.1901H93.4241V10.2901H93.5241ZM95.0441 10.2901V10.3901L95.0466 10.3901L95.0441 10.2901ZM95.7941 10.6001L95.7216 10.6691L95.7221 10.6695L95.7941 10.6001ZM96.0741 11.2701L96.1741 11.2704L96.174 11.2677L96.0741 11.2701ZM95.8041 11.9501L95.731 11.8817L95.7295 11.8835L95.8041 11.9501ZM92.6541 7.00009V13.0001H92.8541V7.00009H92.6541ZM94.9241 6.90009H92.7541V7.10009H94.9241V6.90009ZM96.2108 7.38565C95.8573 7.06856 95.3979 6.89533 94.9231 6.9001L94.9251 7.10009C95.3499 7.09582 95.761 7.25081 96.0773 7.53453L96.2108 7.38565ZM96.764 8.63174C96.7719 8.15476 96.5692 7.69855 96.2098 7.38477L96.0783 7.53541C96.3932 7.81046 96.571 8.21034 96.5641 8.62844L96.764 8.63174ZM96.5281 9.44427C96.6846 9.20143 96.7666 8.91809 96.7641 8.62919L96.5641 8.63099C96.5663 8.88084 96.4954 9.12589 96.36 9.33592L96.5281 9.44427ZM95.8946 9.9715C96.1497 9.85832 96.3684 9.67668 96.5265 9.44674L96.3617 9.33344C96.2245 9.53292 96.0348 9.6905 95.8135 9.78869L95.8946 9.9715ZM96.6541 10.3402C96.4604 10.0814 96.1923 9.88782 95.8858 9.78526L95.8223 9.97492C96.0903 10.0646 96.3246 10.2338 96.494 10.46L96.6541 10.3402ZM96.9641 11.2511C96.9675 10.9202 96.8576 10.598 96.6526 10.3382L96.4955 10.462C96.6723 10.686 96.767 10.9638 96.7641 11.2491L96.9641 11.2511ZM96.3896 12.5456C96.7645 12.2199 96.975 11.7443 96.964 11.2479L96.7641 11.2523C96.7738 11.6893 96.5885 12.1079 96.2585 12.3946L96.3896 12.5456ZM95.0422 13.0601C95.5422 13.0692 96.0261 12.8839 96.3922 12.5433L96.2559 12.3969C95.9278 12.7022 95.494 12.8683 95.0459 12.8601L95.0422 13.0601ZM92.7558 13.1001L95.0458 13.0601L95.0423 12.8601L92.7523 12.9001L92.7558 13.1001ZM94.9241 9.47009H93.5241V9.67009H94.9241V9.47009ZM95.5494 9.21359C95.3929 9.3893 95.1647 9.48385 94.9298 9.47026L94.9183 9.66992C95.2142 9.68704 95.5016 9.56794 95.6987 9.34659L95.5494 9.21359ZM95.7941 8.64867C95.7911 8.85968 95.7048 9.06096 95.5541 9.20867L95.694 9.35152C95.8825 9.16688 95.9903 8.91528 95.994 8.65152L95.7941 8.64867ZM95.5889 8.06602C95.7291 8.22594 95.8026 8.4336 95.7941 8.64613L95.994 8.65406C96.0044 8.39032 95.9133 8.13262 95.7392 7.93416L95.5889 8.06602ZM94.9986 7.81999C95.2227 7.80979 95.4396 7.90043 95.5898 8.06705L95.7383 7.93314C95.5481 7.72209 95.2734 7.60727 94.9895 7.62019L94.9986 7.81999ZM93.5241 7.82009H94.9941V7.62009H93.5241V7.82009ZM93.6241 9.57009V7.72009H93.4241V9.57009H93.6241ZM93.5241 12.3601H95.0741V12.1601H93.5241V12.3601ZM93.4241 10.2901V12.2601H93.6241V10.2901H93.4241ZM95.0441 10.1901H93.5241V10.3901H95.0441V10.1901ZM95.8665 10.5311C95.652 10.306 95.3523 10.1821 95.0415 10.1901L95.0466 10.3901C95.301 10.3835 95.5462 10.4848 95.7216 10.6691L95.8665 10.5311ZM96.174 11.2677C96.1673 10.9921 96.0574 10.7291 95.866 10.5307L95.7221 10.6695C95.8787 10.8318 95.9686 11.047 95.9741 11.2725L96.174 11.2677ZM95.8771 12.0184C96.067 11.8156 96.1731 11.5483 96.1741 11.2704L95.9741 11.2697C95.9733 11.4971 95.8865 11.7158 95.7311 11.8817L95.8771 12.0184ZM95.0702 12.36C95.3774 12.372 95.6739 12.2461 95.8787 12.0167L95.7295 11.8835C95.5645 12.0683 95.3255 12.1698 95.078 12.1602L95.0702 12.36Z" fill="white" />
      <defs>
        <linearGradient id="paint0_linear" x1="18.1452" y1="-7.58879" x2="-1.68853" y2="-2.33326" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A0FF" />
          <stop offset="0.01" stopColor="#00A1FF" />
          <stop offset="0.26" stopColor="#00BEFF" />
          <stop offset="0.51" stopColor="#00D2FF" />
          <stop offset="0.76" stopColor="#00DFFF" />
          <stop offset="1" stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="34.4941" y1="9.79972" x2="10.3041" y2="9.79972" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE000" />
          <stop offset="0.41" stopColor="#FFBD00" />
          <stop offset="0.78" stopColor="#FFA500" />
          <stop offset="1" stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient id="paint2_linear" x1="10.7516" y1="13.5195" x2="-5.20991" y2="40.3187" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient id="paint3_linear" x1="1.37899" y1="4.09896" x2="8.5013" y2="16.0668" gradientUnits="userSpaceOnUse">
          <stop stopColor="#32A071" />
          <stop offset="0.07" stopColor="#2DA771" />
          <stop offset="0.48" stopColor="#15CF74" />
          <stop offset="0.8" stopColor="#06E775" />
          <stop offset="1" stopColor="#00F076" />
        </linearGradient>
      </defs>
    </svg>
  </StoreButton>
);
