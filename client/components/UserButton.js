import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

function UserButtonBase(props) {
  return (
    <button className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="12"
        viewBox="0 0 14 12">
        <path
          fill="#303030"
          d="M0.97185382,12 L2.43783815,9.12740185 L2.41514151,9.11171912 C2.21907534,8.97668814 2.0339473,8.8490998 1.85319452,8.70343646 C0.946422642,7.97538553 0.382834932,7.14287166 0.130984237,6.15937827 C0.0888723949,5.99457667 0.0634412173,5.83110412 0.0385569467,5.67268194 C0.0273453523,5.60117931 0.0166806649,5.5331322 0.00464870989,5.46561671 L0,5.4390358 L0,4.955795 L0.00410180284,4.93107476 C0.0136726761,4.87286258 0.0224231889,4.8146504 0.0314471551,4.75643823 C0.0514092623,4.62193886 0.07219173,4.48265493 0.103638885,4.34257357 C0.319667168,3.38061071 0.856729887,2.52789535 1.6997871,1.80888193 C2.844737,0.832831189 4.24290486,0.260544355 5.97441256,0.0598585405 C6.93433942,-0.0509724641 7.90647986,-0.00768893322 8.85196398,0.187978491 C10.2293494,0.471065104 11.3548841,0.997632785 12.2920093,1.79824957 C13.1514737,2.53374315 13.6767779,3.36652283 13.8977284,4.34124453 C13.9275348,4.47414904 13.9480438,4.60386384 13.9680059,4.73012313 C13.9770299,4.78780369 13.9863273,4.84548425 13.9953513,4.902899 L14,4.9294799 L14,5.46109795 L13.9852335,5.50734872 C13.9795744,5.52476501 13.9750983,5.54252385 13.9718343,5.56051053 C13.90894,6.26809416 13.6551751,6.94271747 13.2171026,7.56896353 C12.58187,8.47616974 11.6742778,9.18455079 10.5194836,9.67417102 C9.41968619,10.1423776 8.23168537,10.3829853 7.03103697,10.3806914 C6.32155594,10.3782765 5.61444624,10.3009149 4.92216341,10.1499692 C4.90854202,10.1479602 4.89461401,10.1497101 4.88196574,10.1550195 C4.18930797,10.4862176 3.48735277,10.826719 2.80672696,11.1557905 L1.9715999,11.5592886 C1.93933238,11.5747056 1.90843213,11.5882618 1.87233627,11.6036787 L1.80479325,11.6331835 L0.97185382,12 Z M0.651913198,5.38507657 C0.663124792,5.44966817 0.673242573,5.51399395 0.682813446,5.57645907 C0.706330449,5.72717279 0.728753638,5.868849 0.763482235,6.00574065 C0.980330879,6.85340563 1.47282067,7.57614038 2.26966424,8.21541108 C2.43182218,8.34618913 2.60737934,8.46713223 2.79305428,8.59498637 C2.87509034,8.6516037 2.96013438,8.71008168 3.04572534,8.77095195 L3.2677696,8.92831089 L2.38861652,10.649956 L2.51495205,10.5888199 C3.19694513,10.2586851 3.90190831,9.91712047 4.59757408,9.58459338 L4.60413696,9.58166948 C4.74221023,9.51887329 4.89721462,9.50026042 5.04685821,9.52850767 L5.05560873,9.53036834 C6.8932164,9.92509474 8.64441276,9.77810235 10.2597027,9.09311249 C11.3146864,8.6457559 12.1060609,8.02987638 12.678946,7.21224782 C13.0552181,6.67478197 13.2723402,6.09717895 13.3237494,5.49538732 L13.3262105,5.47438841 C13.331785,5.43859354 13.3392695,5.40310448 13.3486337,5.36806479 L13.3486337,4.98157847 C13.3398832,4.92974571 13.3316796,4.87791295 13.323476,4.82608019 C13.3043342,4.70407385 13.2860129,4.58897854 13.2608551,4.47707294 C13.0694377,3.63764803 12.6130437,2.91703976 11.86132,2.27378192 C11.0106061,1.54732585 9.98160048,1.06754056 8.71660449,0.807313522 C7.84084907,0.626046314 6.94040062,0.585905922 6.051253,0.688496888 C4.45455788,0.874031588 3.17206086,1.39608052 2.12910913,2.2849459 C1.38258101,2.92288756 0.928374709,3.63897708 0.739965232,4.47760456 C0.71261988,4.59562376 0.695118855,4.71683268 0.675977108,4.8470791 C0.668046956,4.90024091 0.660116804,4.95340271 0.651639745,5.00656452 L0.651639745,5.385874 L0.651913198,5.38507657 Z M9.6802547,6.16496026 L9.66330058,6.16496026 C9.11484324,6.15941259 8.67375352,5.7247185 8.67558646,5.1915676 C8.67750063,4.65463337 9.12049534,4.21737752 9.66330058,4.21737752 C9.93504449,4.21560633 10.196135,4.31999609 10.3879524,4.50710936 C10.5753003,4.6906817 10.6790331,4.9396519 10.675899,5.19821283 C10.675899,5.20193415 10.675899,5.20804776 10.675899,5.21389556 C10.6662088,5.74173009 10.2233558,6.16475447 9.6802547,6.16496026 Z M9.66275368,4.85080043 C9.47871946,4.85080043 9.32804657,5.00470386 9.32749966,5.19395988 C9.32658882,5.37885667 9.47965419,5.52966329 9.66986347,5.53127154 L9.67369182,5.53127154 C9.76514472,5.53305037 9.85356642,5.49937947 9.91944074,5.43769057 C9.98531506,5.37600167 10.0232261,5.29136661 10.0248061,5.20246577 L10.0248061,5.19635216 C10.0268048,5.10563847 9.99112207,5.01796732 9.92581597,4.9531369 C9.85602813,4.88626405 9.76155956,4.84939893 9.66357404,4.85080043 L9.66275368,4.85080043 Z M7.00041018,6.16496026 C6.73384118,6.16496073 6.47821803,6.06189973 6.28990491,5.87850194 C6.1015918,5.69510414 5.99605399,5.44643114 5.9965623,5.18731466 L5.9965623,5.18439076 C6.00285173,4.66021536 6.45350313,4.21764333 6.98099498,4.21764333 L6.98318261,4.21764333 C7.55305975,4.21764333 8.00207043,4.64293777 8.00562533,5.18731466 L8.00562533,5.19103598 C8.00114251,5.72834696 7.55318558,6.16235965 7.00041018,6.16496026 Z M6.64820204,5.18997275 C6.64865244,5.37818154 6.80542177,5.53068709 6.99904291,5.53127154 C7.19399445,5.53128101 7.35258298,5.37866744 7.35453249,5.18917532 C7.35234486,4.99912187 7.19046038,4.85106624 6.98318261,4.85106624 C6.80598473,4.85106624 6.65121003,5.00922261 6.64820204,5.18997275 Z M4.3238471,6.15299885 C3.77212118,6.15241387 3.32488217,5.71803422 3.32382757,5.18173267 L3.32382757,5.17907458 C3.32820282,4.6586205 3.77283825,4.21737752 4.29513448,4.21551686 L4.29650175,4.21551686 C4.57369817,4.21204871 4.84060231,4.31747428 5.03674043,4.50790679 C5.22582494,4.695132 5.32907303,4.94867245 5.32304627,5.21097166 L5.32304627,5.21921174 C5.3033086,5.74105294 4.86187835,6.15392416 4.32466746,6.15299885 L4.3238471,6.15299885 Z M3.97574077,5.1827959 C3.97694205,5.36893068 4.13235567,5.51928762 4.3238471,5.51957594 C4.46272897,5.52158177 4.58909448,5.44182474 4.64371468,5.31768789 C4.69833488,5.19355104 4.67038413,5.0496381 4.57296326,4.95340271 C4.49915124,4.88418184 4.39985196,4.84664499 4.29732211,4.84920558 C4.13188273,4.84973719 3.97874875,5.00842518 3.97656113,5.1827959 L3.97574077,5.1827959 Z"
        />
      </svg>
      <span>{props.children}</span>
    </button>
  );
}

const UserButton = styled(UserButtonBase)`
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #979797;
  padding: ${rem('2px')} ${rem('4px')};
  font-family: 'HK Grotesk', sans-serif;
  font-size: ${rem('12px')};
  font-weight: 300;
  letter-spacing: 0.48px;
  line-height: 21px;
  border: 1px solid #979797;
  min-width: 50px;
  min-height: 39px;
  margin-right: 10px;
  max-height: 39px;

  &:hover {
    cursor: pointer;
  }

  &:hover {
    background-color: ${props =>
      props.toggleUp ? 'rgba(0,0,0,0)' : '#495460'};
    color: ${props => (props.toggleUp ? '#495460' : '#ffffff')};

    path {
      fill: ${props => (props.toggleUp ? '#495460' : '#ffffff')};
    }
  }
`;

export default UserButton;
