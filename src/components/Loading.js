import React from 'react';
import '../css/Loading.css';


const Loading = () => (
  <div className="centered">

    <svg className="spinner"
       xmlns="http://www.w3.org/2000/svg"
       width="200"
       height="200"
       id="soccer_football"
       version="1.1">
      <g id="layer1">
        <path
           d="M 100.4825,-1.0125046 C 44.983805,-1.0125046 -0.01750007,43.9888 -0.01750007,99.4875 c 0,55.49869 45.00130507,100.5 100.50000007,100.5 55.49869,0 100.5,-45.00131 100.5,-100.5 0,-55.4987 -45.00131,-100.5000046 -100.5,-100.5000046 z m 0,1.00000001 c 13.07343,0 25.5343,2.54074099 36.96875,7.12499999 0.51279,4.9140826 0.3417,10.4403036 -0.5,16.4062496 -12.86446,0.696963 -24.47511,3.278067 -34.84375,7.71875 C 92.731442,25.228512 80.107785,21.58607 65.4825,21.549995 65.45235,15.273255 65.127365,10.299151 64.51375,6.7062454 75.667764,2.3813814 87.799588,-0.01250459 100.4825,-0.01250459 z M 138.51375,7.5499952 C 161.6436,17.136168 180.39451,35.174378 190.8575,57.831245 l -2.8125,3.875 c -6.72387,-4.673655 -15.23098,-7.690393 -23.875,-9.6875 -0.003,-0.0049 -0.0279,0.0049 -0.0312,0 -9.06029,-13.503263 -17.78775,-22.927394 -26.21875,-28.25 0.8372,-5.87439 1.05592,-11.304063 0.59375,-16.2187498 z m -73.25,14.9999998 c 0.01817,-0.0065 0.04433,0.0065 0.0625,0 14.538813,0.01029 27.02891,3.583582 36.25,9.5 1.92359,10.980966 3.54361,22.584609 4.84375,34.8125 -15.898417,13.251814 -27.151921,23.708107 -32.5625,30.4375 -12.20437,-3.828812 -23.787735,-6.721843 -34.75,-8.6875 -3.308417,-9.263569 -5.709927,-22.475765 -6.375,-38.4375 10.525567,-14.387406 21.357143,-23.614247 32.53125,-27.625 z M 22.8575,49.206245 c 2.854592,0.02365 5.825372,0.415028 8.875,1.125 0.675045,15.965884 3.093205,29.217137 6.4375,38.59375 -7.686415,10.374295 -12.23413,21.058655 -13.625,32.062505 -5.92035,1.30865 -12.542072,1.74242 -19.0937501,0.4375 -0.00315,-0.005 -0.028099,0.005 -0.03125,0 -1.208114,-1.73868 -2.231664,-3.71759 -3.125,-5.90625 -0.845,-5.21854 -1.31249997,-10.57388 -1.31249997,-16.03125 0,-17.878314 4.71629597,-34.657373 12.96875007,-49.156255 2.85867,-0.775385 5.817392,-1.150587 8.90625,-1.125 z m 141.28125,3.875 c 8.48829,1.978062 16.8416,4.892726 23.34375,9.40625 7.28908,17.891383 10.61466,31.82486 10,41.812505 -4.63724,13.24923 -11.12514,23.2705 -17.71875,29.875 -9.38154,-4.36765 -17.25751,-7.85954 -23.65625,-10.4375 -0.68757,-12.6918 -3.93309,-27.855221 -9.25,-43.812505 6.98224,-10.176961 12.7485,-19.116286 17.28125,-26.84375 z M 107.045,67.612495 c 12.94851,2.635258 25.89523,6.846041 38.84375,12.625 5.31252,15.944092 8.55223,31.098375 9.21875,43.687505 5.3e-4,0.0102 -5.4e-4,0.0211 0,0.0312 -9.06096,10.91701 -19.06513,19.9558 -30,27.125 -15.93827,-2.65638 -30.515546,-7.26128 -41.78125,-13.21875 -3.865442,-15.50567 -6.777801,-28.81816 -8.75,-39.90625 C 79.8574,91.366119 91.117514,80.888551 107.045,67.612445 z M 198.38875,104.8 l 1.4375,0.46875 c -1.42085,24.81773 -11.95231,47.18278 -28.28125,63.84375 l -2.8125,-3.03125 c 6.42362,-11.01279 10.31439,-21.4061 11.6875,-31.15625 6.7023,-6.70231 13.28326,-16.80742 17.96875,-30.125 z m -173.6875,17.21875 c 4.677616,11.69347 13.17588,22.10535 25.5,31.25 0.660713,10.52493 2.754257,20.38659 7.3125,28.40625 -4.131628,0.86101 -8.655413,0.7636 -13.5625,-0.3125 C 26.184493,169.07096 12.588583,151.15273 5.7949999,130.175 c -0.0031,-0.009 0.0031,-0.0218 0,-0.0312 -0.191728,-2.68229 -0.293138,-5.24241 -0.3125,-7.71875 6.6218531,1.28202 13.2690711,0.90118 19.2187501,-0.40625 z m 58.25,16.75 c 11.307358,5.96883 25.81169,10.57522 41.6875,13.25 2.53658,8.29869 4.76027,16.90444 6.6875,25.8125 -7.206,8.49646 -18.73848,14.64101 -33.843745,16.65625 -14.641571,-1.33106 -27.617873,-5.65822 -38.937505,-12.96875 -4.580118,-7.88335 -6.679515,-17.73143 -7.34375,-28.3125 11.508934,-4.50375 22.093161,-9.3164 31.75,-14.4375 z m 85.125,28.0625 2.78125,3 c -18.00798,18.00842 -42.89265,29.15625 -70.375,29.15625 -0.827315,0 -1.646275,-0.0112 -2.468745,-0.0312 l -0.40625,-3.5 c 15.324195,-2.04362 27.108225,-8.26428 34.499995,-17 15.44633,-0.73269 27.44017,-4.60344 35.96875,-11.625 z"
           id="soccer_football" />
      </g>
    </svg>
    <h1>Loading...</h1>
  </div>

)

export default Loading;
