//静态数据
var traffic=[
    {"data":"201807010000 ","ons":"307 ","one":"211 ","two":"1050 "},
    {"data":"201807010005 ","ons":"1376 ","one":"1036 ","two":"3159 "},
    {"data":"201807010010 ","ons":"1274 ","one":"907 ","two":"3150 "},
    {"data":"201807010015 ","ons":"1206 ","one":"1189 ","two":"3074 "},
    {"data":"201807010020 ","ons":"1373 ","one":"1363 ","two":"2996 "},
    {"data":"201807010025 ","ons":"1431 ","one":"1099 ","two":"2980 "},
    {"data":"201807010030 ","ons":"1350 ","one":"931 ","two":"2963 "},
    {"data":"201807010035 ","ons":"1256 ","one":"889 ","two":"2914 "},
    {"data":"201807010040 ","ons":"1159 ","one":"953 ","two":"2930 "},
    {"data":"201807010045 ","ons":"1170 ","one":"960 ","two":"2876 "},
    {"data":"201807010050 ","ons":"1124 ","one":"879 ","two":"2844 "},
    {"data":"201807010055 ","ons":"1099 ","one":"864 ","two":"2830 "},
    {"data":"201807010100 ","ons":"1009 ","one":"846 ","two":"2817 "},
    {"data":"201807010105 ","ons":"946 ","one":"860 ","two":"2770 "},
    {"data":"201807010110 ","ons":"900 ","one":"857 ","two":"2749 "},
    {"data":"201807010115 ","ons":"894 ","one":"851 ","two":"2850 "},
    {"data":"201807010120 ","ons":"903 ","one":"1064 ","two":"2870 "},
    {"data":"201807010125 ","ons":"927 ","one":"1413 ","two":"2804 "},
    {"data":"201807010130 ","ons":"950 ","one":"1587 ","two":"2770 "},
    {"data":"201807010135 ","ons":"919 ","one":"1540 ","two":"2823 "},
    {"data":"201807010140 ","ons":"917 ","one":"1381 ","two":"2773 "},
    {"data":"201807010145 ","ons":"947 ","one":"1363 ","two":"2764 "},
    {"data":"201807010150 ","ons":"957 ","one":"1584 ","two":"2776 "},
    {"data":"201807010155 ","ons":"959 ","one":"1090 ","two":"2807 "},
    {"data":"201807010200 ","ons":"964 ","one":"1209 ","two":"2981 "},
    {"data":"201807010205 ","ons":"1014 ","one":"1463 ","two":"3069 "},
    {"data":"201807010210 ","ons":"1099 ","one":"1473 ","two":"2930 "},
    {"data":"201807010215 ","ons":"1093 ","one":"1511 ","two":"3061 "},
    {"data":"201807010220 ","ons":"1103 ","one":"1640 ","two":"3134 "},
    {"data":"201807010225 ","ons":"1140 ","one":"1729 ","two":"3210 "},
    {"data":"201807010230 ","ons":"1106 ","one":"1454 ","two":"2901 "},
    {"data":"201807010235 ","ons":"1020 ","one":"1224 ","two":"2901 "},
    {"data":"201807010240 ","ons":"987 ","one":"1256 ","two":"2861 "},
    {"data":"201807010245 ","ons":"979 ","one":"1743 ","two":"3013 "},
    {"data":"201807010250 ","ons":"1123 ","one":"1726 ","two":"2930 "},
    {"data":"201807010255 ","ons":"1193 ","one":"1773 ","two":"3029 "},
    {"data":"201807010300 ","ons":"1193 ","one":"1634 ","two":"2814 "},
    {"data":"201807010305 ","ons":"1129 ","one":"1783 ","two":"2783 "},
    {"data":"201807010310 ","ons":"1087 ","one":"1549 ","two":"2840 "},
    {"data":"201807010315 ","ons":"1006 ","one":"1650 ","two":"2789 "},
    {"data":"201807010320 ","ons":"994 ","one":"1563 ","two":"2851 "},
    {"data":"201807010325 ","ons":"956 ","one":"1261 ","two":"2653 "},
    {"data":"201807010330 ","ons":"947 ","one":"1229 ","two":"2643 "},
    {"data":"201807010335 ","ons":"946 ","one":"1093 ","two":"2619 "},
    {"data":"201807010340 ","ons":"949 ","one":"933 ","two":"2603 "},
    {"data":"201807010345 ","ons":"960 ","one":"1121 ","two":"2581 "},
    {"data":"201807010350 ","ons":"956 ","one":"811 ","two":"2577 "},
    {"data":"201807010355 ","ons":"1007 ","one":"1063 ","two":"2857 "},
    {"data":"201807010400 ","ons":"1091 ","one":"1386 ","two":"2983 "},
    {"data":"201807010405 ","ons":"1193 ","one":"1384 ","two":"2934 "},
    {"data":"201807010410 ","ons":"1214 ","one":"1340 ","two":"2991 "},
    {"data":"201807010415 ","ons":"1176 ","one":"1204 ","two":"2926 "},
    {"data":"201807010420 ","ons":"1149 ","one":"1429 ","two":"3263 "},
    {"data":"201807010425 ","ons":"1189 ","one":"1150 ","two":"2939 "},
    {"data":"201807010430 ","ons":"1217 ","one":"1064 ","two":"3051 "},
    {"data":"201807010435 ","ons":"1193 ","one":"881 ","two":"2841 "},
    {"data":"201807010440 ","ons":"1189 ","one":"1067 ","two":"3060 "},
    {"data":"201807010445 ","ons":"1291 ","one":"1076 ","two":"3053 "},
    {"data":"201807010450 ","ons":"1359 ","one":"1057 ","two":"3171 "},
    {"data":"201807010455 ","ons":"1361 ","one":"1164 ","two":"3006 "},
    {"data":"201807010500 ","ons":"1337 ","one":"1554 ","two":"3594 "},
    {"data":"201807010505 ","ons":"1580 ","one":"1657 ","two":"3553 "},
    {"data":"201807010510 ","ons":"1773 ","one":"1516 ","two":"3564 "},
    {"data":"201807010515 ","ons":"1763 ","one":"1457 ","two":"3731 "},
    {"data":"201807010520 ","ons":"1707 ","one":"1500 ","two":"3913 "},
    {"data":"201807010525 ","ons":"1750 ","one":"1623 ","two":"4044 "},
    {"data":"201807010530 ","ons":"1803 ","one":"1770 ","two":"4273 "},
    {"data":"201807010535 ","ons":"1830 ","one":"2013 ","two":"4637 "},
    {"data":"201807010540 ","ons":"1951 ","one":"2223 ","two":"4606 "},
    {"data":"201807010545 ","ons":"2029 ","one":"2610 ","two":"4854 "},
    {"data":"201807010550 ","ons":"2054 ","one":"2656 ","two":"4734 "},
    {"data":"201807010555 ","ons":"1919 ","one":"2457 ","two":"4957 "},
    {"data":"201807010600 ","ons":"1860 ","one":"2249 ","two":"5333 "},
    {"data":"201807010605 ","ons":"1836 ","one":"2096 ","two":"5544 "},
    {"data":"201807010610 ","ons":"1880 ","one":"1836 ","two":"5699 "},
    {"data":"201807010615 ","ons":"1756 ","one":"1760 ","two":"5850 "},
    {"data":"201807010620 ","ons":"1826 ","one":"2033 ","two":"6179 "},
    {"data":"201807010625 ","ons":"2006 ","one":"1971 ","two":"6473 "},
    {"data":"201807010630 ","ons":"2297 ","one":"2143 ","two":"6803 "},
    {"data":"201807010635 ","ons":"2531 ","one":"2243 ","two":"7271 "},
    {"data":"201807010640 ","ons":"3010 ","one":"2491 ","two":"7701 "},
    {"data":"201807010645 ","ons":"3343 ","one":"2791 ","two":"7783 "},
    {"data":"201807010650 ","ons":"3399 ","one":"3071 ","two":"8189 "},
    {"data":"201807010655 ","ons":"3377 ","one":"3350 ","two":"8429 "},
    {"data":"201807010700 ","ons":"3547 ","one":"3999 ","two":"8779 "},
    {"data":"201807010705 ","ons":"3996 ","one":"4204 ","two":"8634 "},
    {"data":"201807010710 ","ons":"4063 ","one":"3779 ","two":"8726 "},
    {"data":"201807010715 ","ons":"3854 ","one":"3554 ","two":"8841 "},
    {"data":"201807010720 ","ons":"4060 ","one":"3337 ","two":"8831 "},
    {"data":"201807010725 ","ons":"3900 ","one":"3681 ","two":"8767 "},
    {"data":"201807010730 ","ons":"4349 ","one":"4714 ","two":"8716 "},
    {"data":"201807010735 ","ons":"4440 ","one":"4411 ","two":"8839 "},
    {"data":"201807010740 ","ons":"4341 ","one":"4774 ","two":"9217 "},
    {"data":"201807010745 ","ons":"4473 ","one":"4594 ","two":"9051 "},
    {"data":"201807010750 ","ons":"4603 ","one":"4030 ","two":"9554 "},
    {"data":"201807010755 ","ons":"4750 ","one":"4881 ","two":"9851 "},
    {"data":"201807010800 ","ons":"5469 ","one":"5867 ","two":"10130 "},
    {"data":"201807010805 ","ons":"5413 ","one":"5609 ","two":"10447 "},
    {"data":"201807010810 ","ons":"5247 ","one":"5637 ","two":"11190 "},
    {"data":"201807010815 ","ons":"5397 ","one":"5451 ","two":"11033 "},
    {"data":"201807010820 ","ons":"5563 ","one":"6870 ","two":"10939 "},
    {"data":"201807010825 ","ons":"6049 ","one":"5976 ","two":"10847 "},
    {"data":"201807010830 ","ons":"6026 ","one":"6051 ","two":"11067 "},
    {"data":"201807010835 ","ons":"6077 ","one":"6017 ","two":"11183 "},
    {"data":"201807010840 ","ons":"6293 ","one":"7171 ","two":"11171 "},
    {"data":"201807010845 ","ons":"6761 ","one":"7204 ","two":"11153 "},
    {"data":"201807010850 ","ons":"6820 ","one":"6989 ","two":"11431 "},
    {"data":"201807010855 ","ons":"6339 ","one":"5524 ","two":"11309 "},
    {"data":"201807010900 ","ons":"6161 ","one":"6574 ","two":"11431 "},
    {"data":"201807010905 ","ons":"6787 ","one":"8144 ","two":"11543 "},
    {"data":"201807010910 ","ons":"7170 ","one":"6903 ","two":"11450 "},
    {"data":"201807010915 ","ons":"7051 ","one":"7440 ","two":"11426 "},
    {"data":"201807010920 ","ons":"7064 ","one":"6083 ","two":"11296 "},
    {"data":"201807010925 ","ons":"6656 ","one":"6033 ","two":"11681 "},
    {"data":"201807010930 ","ons":"6620 ","one":"6429 ","two":"11529 "},
    {"data":"201807010935 ","ons":"6854 ","one":"5977 ","two":"12214 "},
    {"data":"201807010940 ","ons":"6937 ","one":"6163 ","two":"12116 "},
    {"data":"201807010945 ","ons":"7156 ","one":"8036 ","two":"13060 "},
    {"data":"201807010950 ","ons":"7580 ","one":"8620 ","two":"12919 "},
    {"data":"201807010955 ","ons":"7923 ","one":"9673 ","two":"12590 "},
    {"data":"201807011000 ","ons":"7990 ","one":"8340 ","two":"11827 "},
    {"data":"201807011005 ","ons":"7617 ","one":"8401 ","two":"12207 "},
    {"data":"201807011010 ","ons":"7819 ","one":"7043 ","two":"11751 "},
    {"data":"201807011015 ","ons":"7624 ","one":"7031 ","two":"11760 "},
    {"data":"201807011020 ","ons":"7836 ","one":"7377 ","two":"11534 "},
    {"data":"201807011025 ","ons":"7613 ","one":"7224 ","two":"11626 "},
    {"data":"201807011030 ","ons":"7444 ","one":"8450 ","two":"12221 "},
    {"data":"201807011035 ","ons":"8213 ","one":"10200 ","two":"12201 "},
    {"data":"201807011040 ","ons":"8576 ","one":"8901 ","two":"11723 "},
    {"data":"201807011045 ","ons":"8319 ","one":"7076 ","two":"11930 "},
    {"data":"201807011050 ","ons":"7650 ","one":"5056 ","two":"11471 "},
    {"data":"201807011055 ","ons":"7276 ","one":"6167 ","two":"11744 "},
    {"data":"201807011100 ","ons":"7781 ","one":"6829 ","two":"11839 "},
    {"data":"201807011105 ","ons":"7731 ","one":"6863 ","two":"11673 "},
    {"data":"201807011110 ","ons":"7803 ","one":"6034 ","two":"11173 "},
    {"data":"201807011115 ","ons":"7391 ","one":"5266 ","two":"10924 "},
    {"data":"201807011120 ","ons":"7133 ","one":"6003 ","two":"11073 "},
    {"data":"201807011125 ","ons":"7229 ","one":"7214 ","two":"11124 "},
    {"data":"201807011130 ","ons":"7587 ","one":"6961 ","two":"11463 "},
    {"data":"201807011135 ","ons":"7616 ","one":"6973 ","two":"11704 "},
    {"data":"201807011140 ","ons":"7699 ","one":"6190 ","two":"11667 "},
    {"data":"201807011145 ","ons":"7673 ","one":"5121 ","two":"11800 "},
    {"data":"201807011150 ","ons":"7289 ","one":"5437 ","two":"11774 "},
    {"data":"201807011155 ","ons":"7116 ","one":"6261 ","two":"12000 "},
    {"data":"201807011200 ","ons":"7791 ","one":"8719 ","two":"12730 "},
    {"data":"201807011205 ","ons":"8913 ","one":"8483 ","two":"13133 "},
    {"data":"201807011210 ","ons":"8614 ","one":"7720 ","two":"12921 "},
    {"data":"201807011215 ","ons":"8139 ","one":"7576 ","two":"13201 "},
    {"data":"201807011220 ","ons":"8074 ","one":"7697 ","two":"13330 "},
    {"data":"201807011225 ","ons":"8314 ","one":"7860 ","two":"13269 "},
    {"data":"201807011230 ","ons":"8174 ","one":"7519 ","two":"13517 "},
    {"data":"201807011235 ","ons":"8154 ","one":"8019 ","two":"14443 "},
    {"data":"201807011240 ","ons":"8371 ","one":"8789 ","two":"14617 "},
    {"data":"201807011245 ","ons":"8337 ","one":"8303 ","two":"14554 "},
    {"data":"201807011250 ","ons":"8301 ","one":"8826 ","two":"14009 "},
    {"data":"201807011255 ","ons":"8536 ","one":"9531 ","two":"14039 "},
    {"data":"201807011300 ","ons":"8853 ","one":"9837 ","two":"14060 "},
    {"data":"201807011305 ","ons":"8681 ","one":"7987 ","two":"13764 "},
    {"data":"201807011310 ","ons":"8466 ","one":"5799 ","two":"13883 "},
    {"data":"201807011315 ","ons":"8100 ","one":"5826 ","two":"14137 "},
    {"data":"201807011320 ","ons":"8790 ","one":"7127 ","two":"14094 "},
    {"data":"201807011325 ","ons":"8791 ","one":"6756 ","two":"13964 "},
    {"data":"201807011330 ","ons":"8596 ","one":"7800 ","two":"15029 "},
    {"data":"201807011335 ","ons":"9173 ","one":"9599 ","two":"15020 "},
    {"data":"201807011340 ","ons":"9447 ","one":"9709 ","two":"15397 "},
    {"data":"201807011345 ","ons":"9901 ","one":"10923 ","two":"15210 "},
    {"data":"201807011350 ","ons":"9969 ","one":"9674 ","two":"14266 "},
    {"data":"201807011355 ","ons":"8964 ","one":"9040 ","two":"14034 "},
    {"data":"201807011400 ","ons":"8687 ","one":"9390 ","two":"13917 "},
    {"data":"201807011405 ","ons":"8620 ","one":"8507 ","two":"13710 "},
    {"data":"201807011410 ","ons":"8311 ","one":"7344 ","two":"13703 "},
    {"data":"201807011415 ","ons":"8133 ","one":"4543 ","two":"13406 "},
    {"data":"201807011420 ","ons":"7823 ","one":"3697 ","two":"13493 "},
    {"data":"201807011425 ","ons":"7733 ","one":"5276 ","two":"13693 "},
    {"data":"201807011430 ","ons":"8107 ","one":"6933 ","two":"14054 "},
    {"data":"201807011435 ","ons":"8450 ","one":"7349 ","two":"14431 "},
    {"data":"201807011440 ","ons":"8587 ","one":"7406 ","two":"14524 "},
    {"data":"201807011445 ","ons":"8819 ","one":"6486 ","two":"14829 "},
    {"data":"201807011450 ","ons":"8329 ","one":"5526 ","two":"14860 "},
    {"data":"201807011455 ","ons":"8556 ","one":"6161 ","two":"14930 "},
    {"data":"201807011500 ","ons":"8820 ","one":"6609 ","two":"15324 "},
    {"data":"201807011505 ","ons":"8927 ","one":"7514 ","two":"16364 "},
    {"data":"201807011510 ","ons":"8913 ","one":"8049 ","two":"16373 "},
    {"data":"201807011515 ","ons":"8851 ","one":"8633 ","two":"16186 "},
    {"data":"201807011520 ","ons":"9387 ","one":"9224 ","two":"16437 "},
    {"data":"201807011525 ","ons":"9451 ","one":"8269 ","two":"16051 "},
    {"data":"201807011530 ","ons":"9754 ","one":"8533 ","two":"16244 "},
    {"data":"201807011535 ","ons":"9820 ","one":"9819 ","two":"16141 "},
    {"data":"201807011540 ","ons":"10763 ","one":"10600 ","two":"16819 "},
    {"data":"201807011545 ","ons":"10931 ","one":"8877 ","two":"16509 "},
    {"data":"201807011550 ","ons":"10324 ","one":"7967 ","two":"16611 "},
    {"data":"201807011555 ","ons":"9776 ","one":"7277 ","two":"16691 "},
    {"data":"201807011600 ","ons":"10159 ","one":"8506 ","two":"16843 "},
    {"data":"201807011605 ","ons":"9880 ","one":"8477 ","two":"16204 "},
    {"data":"201807011610 ","ons":"9266 ","one":"7936 ","two":"16154 "},
    {"data":"201807011615 ","ons":"8987 ","one":"8189 ","two":"16111 "},
    {"data":"201807011620 ","ons":"9171 ","one":"8349 ","two":"16684 "},
    {"data":"201807011625 ","ons":"9914 ","one":"9354 ","two":"16683 "},
    {"data":"201807011630 ","ons":"10271 ","one":"9007 ","two":"16597 "},
    {"data":"201807011635 ","ons":"9696 ","one":"8700 ","two":"17021 "},
    {"data":"201807011640 ","ons":"9713 ","one":"9084 ","two":"16971 "},
    {"data":"201807011645 ","ons":"9123 ","one":"8603 ","two":"16907 "},
    {"data":"201807011650 ","ons":"9093 ","one":"9521 ","two":"16594 "},
    {"data":"201807011655 ","ons":"8961 ","one":"8959 ","two":"16149 "},
    {"data":"201807011700 ","ons":"8697 ","one":"8440 ","two":"15956 "},
    {"data":"201807011705 ","ons":"7911 ","one":"8674 ","two":"15736 "},
    {"data":"201807011710 ","ons":"8463 ","one":"9700 ","two":"16364 "},
    {"data":"201807011715 ","ons":"9070 ","one":"10984 ","two":"16626 "},
    {"data":"201807011720 ","ons":"9300 ","one":"9453 ","two":"16011 "},
    {"data":"201807011725 ","ons":"8829 ","one":"9656 ","two":"15944 "},
    {"data":"201807011730 ","ons":"8730 ","one":"9253 ","two":"15886 "},
    {"data":"201807011735 ","ons":"8869 ","one":"7954 ","two":"15794 "},
    {"data":"201807011740 ","ons":"8943 ","one":"8410 ","two":"15660 "},
    {"data":"201807011745 ","ons":"8999 ","one":"9396 ","two":"15471 "},
    {"data":"201807011750 ","ons":"8549 ","one":"9337 ","two":"15784 "},
    {"data":"201807011755 ","ons":"8106 ","one":"7721 ","two":"14926 "},
    {"data":"201807011800 ","ons":"7899 ","one":"6921 ","two":"14520 "},
    {"data":"201807011805 ","ons":"8034 ","one":"7124 ","two":"15411 "},
    {"data":"201807011810 ","ons":"8287 ","one":"8193 ","two":"15259 "},
    {"data":"201807011815 ","ons":"8177 ","one":"9183 ","two":"15186 "},
    {"data":"201807011820 ","ons":"8079 ","one":"9077 ","two":"14641 "},
    {"data":"201807011825 ","ons":"8303 ","one":"8676 ","two":"15001 "},
    {"data":"201807011830 ","ons":"7759 ","one":"8527 ","two":"14957 "},
    {"data":"201807011835 ","ons":"7377 ","one":"6341 ","two":"14576 "},
    {"data":"201807011840 ","ons":"7334 ","one":"7571 ","two":"14663 "},
    {"data":"201807011845 ","ons":"7431 ","one":"8529 ","two":"15016 "},
    {"data":"201807011850 ","ons":"7809 ","one":"7883 ","two":"14776 "},
    {"data":"201807011855 ","ons":"7621 ","one":"8539 ","two":"14813 "},
    {"data":"201807011900 ","ons":"7484 ","one":"9044 ","two":"14344 "},
    {"data":"201807011905 ","ons":"7686 ","one":"8989 ","two":"14879 "},
    {"data":"201807011910 ","ons":"7370 ","one":"7973 ","two":"14413 "},
    {"data":"201807011915 ","ons":"7334 ","one":"9030 ","two":"14367 "},
    {"data":"201807011920 ","ons":"7754 ","one":"9600 ","two":"14674 "},
    {"data":"201807011925 ","ons":"7721 ","one":"9826 ","two":"14451 "},
    {"data":"201807011930 ","ons":"7394 ","one":"9511 ","two":"14273 "},
    {"data":"201807011935 ","ons":"7081 ","one":"7931 ","two":"14343 "},
    {"data":"201807011940 ","ons":"6860 ","one":"8264 ","two":"13903 "},
    {"data":"201807011945 ","ons":"6536 ","one":"8349 ","two":"13330 "},
    {"data":"201807011950 ","ons":"6960 ","one":"8183 ","two":"13424 "},
    {"data":"201807011955 ","ons":"6614 ","one":"7423 ","two":"12631 "},
    {"data":"201807012000 ","ons":"6254 ","one":"7119 ","two":"12566 "},
    {"data":"201807012005 ","ons":"6370 ","one":"9221 ","two":"12480 "},
    {"data":"201807012010 ","ons":"6561 ","one":"10433 ","two":"11963 "},
    {"data":"201807012015 ","ons":"6679 ","one":"9917 ","two":"12413 "},
    {"data":"201807012020 ","ons":"6249 ","one":"9373 ","two":"11847 "},
    {"data":"201807012025 ","ons":"6940 ","one":"8946 ","two":"12166 "},
    {"data":"201807012030 ","ons":"7119 ","one":"7021 ","two":"11154 "},
    {"data":"201807012035 ","ons":"6250 ","one":"6731 ","two":"10911 "},
    {"data":"201807012040 ","ons":"5577 ","one":"6261 ","two":"10306 "},
    {"data":"201807012045 ","ons":"5421 ","one":"5957 ","two":"10609 "},
    {"data":"201807012050 ","ons":"5229 ","one":"5244 ","two":"10140 "},
    {"data":"201807012055 ","ons":"4859 ","one":"5807 ","two":"10231 "},
    {"data":"201807012100 ","ons":"4681 ","one":"5216 ","two":"9633 "},
    {"data":"201807012105 ","ons":"4393 ","one":"5170 ","two":"9310 "},
    {"data":"201807012110 ","ons":"4204 ","one":"4679 ","two":"10077 "},
    {"data":"201807012115 ","ons":"3754 ","one":"4637 ","two":"9370 "},
    {"data":"201807012120 ","ons":"3677 ","one":"5377 ","two":"8509 "},
    {"data":"201807012125 ","ons":"3869 ","one":"5829 ","two":"8807 "},
    {"data":"201807012130 ","ons":"4059 ","one":"5673 ","two":"8149 "},
    {"data":"201807012135 ","ons":"4491 ","one":"5901 ","two":"7631 "},
    {"data":"201807012140 ","ons":"4330 ","one":"4759 ","two":"7529 "},
    {"data":"201807012145 ","ons":"3903 ","one":"5579 ","two":"7163 "},
    {"data":"201807012150 ","ons":"3621 ","one":"4776 ","two":"6737 "},
    {"data":"201807012155 ","ons":"3479 ","one":"4564 ","two":"6131 "},
    {"data":"201807012200 ","ons":"3727 ","one":"5681 ","two":"5889 "},
    {"data":"201807012205 ","ons":"4403 ","one":"5536 ","two":"5726 "},
    {"data":"201807012210 ","ons":"4253 ","one":"3847 ","two":"5566 "},
    {"data":"201807012215 ","ons":"3806 ","one":"4360 ","two":"5371 "},
    {"data":"201807012220 ","ons":"4077 ","one":"5021 ","two":"5769 "},
    {"data":"201807012225 ","ons":"3830 ","one":"6454 ","two":"5636 "},
    {"data":"201807012230 ","ons":"4606 ","one":"6447 ","two":"5653 "},
    {"data":"201807012235 ","ons":"4154 ","one":"3999 ","two":"5523 "},
    {"data":"201807012240 ","ons":"3760 ","one":"3590 ","two":"5170 "},
    {"data":"201807012245 ","ons":"3163 ","one":"2506 ","two":"5513 "},
    {"data":"201807012250 ","ons":"2654 ","one":"2430 ","two":"5439 "},
    {"data":"201807012255 ","ons":"2369 ","one":"2326 ","two":"5151 "},
    {"data":"201807012300 ","ons":"2850 ","one":"2754 ","two":"5250 "},
    {"data":"201807012305 ","ons":"2789 ","one":"2066 ","two":"4809 "},
    {"data":"201807012310 ","ons":"2366 ","one":"1610 ","two":"4424 "},
    {"data":"201807012315 ","ons":"2053 ","one":"1623 ","two":"4300 "},
    {"data":"201807012320 ","ons":"2067 ","one":"1507 ","two":"4311 "},
    {"data":"201807012325 ","ons":"1896 ","one":"1410 ","two":"4156 "},
    {"data":"201807012330 ","ons":"1740 ","one":"1647 ","two":"4139 "},
    {"data":"201807012335 ","ons":"1967 ","one":"1523 ","two":"3981 "},
    {"data":"201807012340 ","ons":"1989 ","one":"1299 ","two":"4061 "},
    {"data":"201807012345 ","ons":"1610 ","one":"1553 ","two":"4033 "},
    {"data":"201807012350 ","ons":"1757 ","one":"1713 ","two":"3906 "},
    {"data":"201807012355 ","ons":"1911 ","one":"1449 ","two":"3910 "}
  ]

abs(['ons', 'one', 'two'],'<span style="font-size: 24px;font-weight:bold;">【-1层，1层，2层】实时客流量监测展示分析图</span>');
setInterval(function (){
    var r = $('.timetxt dl dd').find('input');
    arrVal = new Array;
    var _str = '';
    var _txt = "";
    for (var i = 0; i < r.length; i++) {
        if (r[i].checked) {
            arrVal[i] = r[i].value;
            if (!_str) {
                _str += r[i].value;
            } else {
                _str += ',' + r[i].value;
            }
            if (!_txt) {
                _txt += r[i].nextSibling.nodeValue;
            } else {
                _txt += ',' + r[i].nextSibling.nodeValue;
            }

        }
    }
    var tss = _str.split(",");
    //alert(ss)
    $("#titletext").text(_txt);
    if (_txt == "") {
        titles = "";
    } else {
        titles = '<span style="font-size: 24px;font-weight:bold;">' + "【" + _txt + "】" + '实时客流量监测展示分析图</span>';
    }
  abs(tss,titles);
}, 30*1000)
function abs(aa,tt){
  var chart;
  var leged = false;
  var titles=tt; //标题
  var result1 = [],
      result2 = [],
      result3 = []; //数据筛选
  var result0 = [];
  var size = []; //选择数据
  var arrVal;
  var ss = aa;
  var abs = [];

  $(function() {
      //alert("1111")
      //alert(ss)
      //titles = '<span style="font-size: 24px;font-weight:bold;">【-1层，1层，2层】实时客流量监测展示分析图</span>';

      function zong() {
          var _w = $(window).width(),
              _h = $(window).height();
          $('.left_nav').css('height', _h + 'px');
          $('.main_co').css({
              'height': _h - 20 + 'px',
              'width': _w - 300 + 'px'
          });
          $('.tableDiv').css('height', _h - 130 + 'px')
          $('.main_chart').css('height', _h - 150 + 'px')
      }
      zong();
      window.onresize = zong;

      mainTop()
      titleSwitch()
  });

  //选择筛选
  function mainTop() {
      $('.main_top > p').on('click', function() {
          $('.timetxt').css('display', 'block')
      })
      $('.timetxt p').on('click', function() {
          $(this).parent().css('display', 'none')
      })

      $('.timetxt dl dd label :checkbox').click(function() {
          allchk();
      })
      $('#all').click(function() {
          if (this.checked) {
              $('.timetxt dl dd label :checkbox').prop('checked', true);
          } else {
              $('.timetxt dl dd label :checkbox').prop('checked', false);
          }
      });
      selectedVal()
  }

  //选中项的值获取
  var _str = '';

  function selectedVal() {
      iShow(ss);
      var r = $('.timetxt dl dd').find('input');
      $('.timetxt p a:last-child').click(function() {
          arrVal = new Array;
          var _str = '';
          var _txt = "";
          for (var i = 0; i < r.length; i++) {
              if (r[i].checked) {
                  arrVal[i] = r[i].value;
                  if (!_str) {
                      _str += r[i].value;
                  } else {
                      _str += ',' + r[i].value;
                  }
                  if (!_txt) {
                      _txt += r[i].nextSibling.nodeValue;
                  } else {
                      _txt += ',' + r[i].nextSibling.nodeValue;
                  }

              }
          }
          ss = _str.split(",");
          //alert(ss)
          $("#titletext").text(_txt);
          if (_txt == "") {
              titles = "";
          } else {
              titles = '<span style="font-size: 24px;font-weight:bold;">' + "【" + _txt + "】" + '实时客流量监测展示分析图</span>';
          }
          iShow(ss);
      })
  }



  function allchk() {
      var chknum = $('#list :checkbox').size();
      var chk = 0;
      $('#list :checkbox').each(function() {
          if ($(this).prop('checked') == true) {
              chk++;
          }
      })
      if (chk == chknum) {
          $('#all').prop('checked', true);
      } else {
          $('#all').prop('checked', false);
      }
  }

  //表格与图标切换
  function titleSwitch() {
          var btn1 = $('.main_table h2 a');
          btn1.click(function() {
              $(this).addClass('active')
                  .siblings().removeClass();
              var _index = $(this).index();
              $('.main_active > div').eq(btn1.index(this) - 1).css('display', 'block').siblings().css('display', 'none');
          });
      }
      //每隔三个字符加逗号

  function toThousands(num) {
      var result = [],
          counter = 0;
      num = (num || 0).toString().split('');
      for (var i = num.length - 1; i >= 0; i--) {
          counter++;
          result.unshift(num[i]);
          if (!(counter % 3) && i != 0) {
              result.unshift(',');
          }
      }
      return result.join('');
  }

  function iShow(arr) {
      //位数不足2位加0
      function toDouble(iNum) {
          if (iNum < 10) {
              return '0' + iNum;
          } else {
              return '' + iNum;
          }
      }

      //获取系统时间
      function getNowFormatDate() {
          var date = new Date();
          var currentdate = toDouble(date.getHours()) + toDouble(date.getMinutes());
          return currentdate;
      }
      var _time = getNowFormatDate()

      var iHtml = '';
      traffic = traffic.sort(function(a, b) {
          return b.data - a.data;
      });
      iHtml += '<thead>'
      iHtml += '<tr>'
      iHtml += '<th>时间 / 区域</th>'
      $(arr).each(function(i, obj1) {
          var tc = "未知层"
          if (obj1 == "ons") {
              tc = "-1层";
              iHtml += '<th>' + tc + '</th>'
          } else if (obj1 == "one") {
              tc = "1层";
              iHtml += '<th>' + tc + '</th>'
          } else if (obj1 == "two") {
              tc = "2层";
              iHtml += '<th>' + tc + '</th>'
          } else {
              tc = "未知层"
          }
      });
      iHtml += '</tr>'
      iHtml += '</thead>'
      iHtml += '<tbody>'
      $(traffic).each(function(i, obj) {
          if ((obj.data.substring(8, 10) + obj.data.substr(obj.data.length - 3)) <= _time-1) {

              if (arr[0] == '' || arr[0] == null) {} else {
                  iHtml += '<tr>'
                  iHtml += '<td> ' + (obj.data).substring(8, 10) + ':' + obj.data.substr(obj.data.length - 3) + ' </td>'
                  $(arr).each(function(j, obj1) {
                      iHtml += '<td> ' + toThousands($.trim(obj[obj1])) + ' </td>'
                  })
                  iHtml += '</tr>';
              }
          }
      })

      var serieslist = [];
      $(arr).each(function(i, obj1) {

              var arryrdata = [];
              $(traffic).each(function(j, obj) {
                  if ((obj.data.substring(8, 10) + obj.data.substr(obj.data.length - 3)) <= _time) {
                      var tempSj = Number(Number((obj.data).substring(8, 10))+Number((Number((obj.data).substring(10, 12))/60).toFixed(2)));
                      arryrdata.push([tempSj, Number(obj[obj1])]);
                  }

              })
              var tc = "未知层"
              if (obj1 == "ons") {
                  tc = "-1层";
                  serieslist.push({
                      name: tc,
                      data: arryrdata
                  });
              } else if (obj1 == "one") {
                  tc = "1层";
                  serieslist.push({
                      name: tc,
                      data: arryrdata
                  });
              } else if (obj1 == "two") {
                  tc = "2层";
                  serieslist.push({
                      name: tc,
                      data: arryrdata
                  });
              } else {
                  tc = "未知层"
              }
              //alert(tc)
              //var res={"name":obj1,"data":arryrdata};

          })
          // console.log(serieslist);
      iHtml += '</tbody>'
      $('.tableDiv table').html(iHtml)
          //if(serieslist!=null&&serieslist[0]!=''&&serieslist[0]!=null){
          //}else{
          //    serieslist=[];
          // }
      showHighcharts(serieslist);
  }

  function showHighcharts(serieslist) {
      //console.info(serieslist);
      leged = true;
      chart = new Highcharts.Chart({
          chart: {
              animation: Highcharts.svg, // don't animate in old IE
              marginRight: 30,
              renderTo: 'chart',
              type: 'spline'
          },
          title: {
              text: titles
          },
          legend: {
              enabled: leged
          },
          credits: { //右下角地址
              text: ''
          },
          xAxis: {
              min: 0,
              max: 24,
              tickInterval: 1, //步进
              tickPixelInterval: 10,
              labels: {
                  style: {
                      color: '#000000'
                  }
              }
          },
          yAxis: {
              title: {
                  text: '实时客流量'
              },
              labels: {
                  format: '{value}',
                  style: {
                      color: '#000000'
                  }
              },
              min: 0,
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
          },
          tooltip: {
              backgroundColor: '#999999', // 背景颜色
              borderColor: 'ffffff', // 边框颜色
              borderRadius: 5, // 边框圆角
              animation: true, // 是否启用动画效果
              useHTML: true,
              shared: true, //共享提示框
              formatter: function() {
                  var shi = (this.x + '').split('.');
                  var er = 0;
                  if (shi.length == 2) {
                      er = Number(shi[1]);
                      if (shi[1].length == 1) {
                          er = Number(er + '0');
                      }
                  }
                  er = Math.round(er * 60 / 100);
                  if (er == 0) {
                      er = er + '0';
                  } else if (er < 10) {
                      er = '0' + er;
                  }
                  var temp = '<div style="color:#ffffff">';
                  temp += '<div style="height:20px;background:#666666;border-radius: 10px;line-height:20px;margin:0px 0px 5px 0px;">';
                  temp += ' <div style="width:60%;float:left;height:8px;margin:0px 8px 8px 8px;">';
                  temp += '   <span style="margin-left:7px;">时间：</span>';
                  temp += '   <span style="heigt:8px;font-size:13px;margin-left:5px;">' + shi[0] + ':' + er + '</span>';
                  temp += ' </div>';
                  temp += '</div>';
                  for (var i = 0; i < this.points.length; i++) {
                      temp += '<div style="height:20px;background:#666666;border-radius: 10px;line-height:20px;margin:0px 0px 5px 0px;">';
                      temp += ' <div style="width:60%;float:left;height:8px;margin:0px 8px 8px 8px;">';
                      if(this.points[i].series.name == '-1层'){
                        temp += '   <span style="margin-left:7px;">' + (this.points[i].series.name) + '</span>';
                      }else{
                        temp += '<span style="margin-left:14px;">' + (this.points[i].series.name) + '</span>';
                      }
                      temp += '<span style="display:inline-block;margin-top:5px;margin-left:10px;line-height:10px;width:10px;height:10px;background:' + this.points[i].series.color + ';">&nbsp;</span>';
                      temp += '   <span style="heigt:8px;font-size:13px;margin-left:5px;">' + toThousands(this.points[i].y) + '</span>';
                      temp += ' </div>';
                      temp += '</div>';
                  }
                  temp += '</div>';
                  return temp;
              }
          },
          plotOptions: {
              series: {
                  cursor: 'pointer',
                  marker: {
                      enabled: false //false false的时候就不会突出显示点 
                  }
              },
              column: {
                  pointPadding: 0.4,
                  borderWidth: 0
              }
          },
          exporting: {
              enabled: true,
              // 文件名  
              //filename : titles,
              // 导出文件默认类型  
              type: 'image/png',
              //exporttable : etstr,
              sourceWidth: (screen.availWidth - 365),
              url: 'kpi/export/export.do'
          },
          series: serieslist
      });
  }
}

$(function() {
  //导航移入移出
  var timer2 = null;
  $(".header1").mouseover(function() {
    clearTimeout(timer2);
    $(".header").css({
        top: '0px'
    });
  });
  $(".header").mouseout(function() {
    clearTimeout(timer2);
    timer2 = setTimeout(function() {
      $(".header").css({
          top: '-66px'
      });
    }, 800)
  });
})